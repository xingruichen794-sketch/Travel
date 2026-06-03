const ALLOWED_ORIGINS = new Set([
  "https://xingruichen794-sketch.github.io"
]);

const STATUS_LABELS = {
  scheduled: "计划中",
  delayed: "延误",
  active: "已起飞",
  landed: "已到达",
  cancelled: "取消",
  incident: "异常",
  diverted: "备降"
};

function getCorsHeaders(request) {
  const origin = request.headers.get("Origin");
  const headers = {
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "public, max-age=300"
  };

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

function jsonResponse(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...getCorsHeaders(request),
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

function validateFlight(value) {
  return /^[A-Z0-9]{2,8}$/.test(value);
}

function validateDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function getDelayMinutes(flight) {
  const departureDelay = Number(flight.departure?.delay);
  const arrivalDelay = Number(flight.arrival?.delay);
  const delays = [departureDelay, arrivalDelay].filter(Number.isFinite);

  if (!delays.length) {
    return null;
  }

  const delay = Math.max(...delays);
  return delay > 0 ? delay : null;
}

function getStatusText(status, delayMinutes) {
  if (delayMinutes && !["landed", "cancelled"].includes(status)) {
    return "延误";
  }

  return STATUS_LABELS[status] || "出发前更新";
}

function normalizeFlight(flight, requestedFlight, requestedDate) {
  const delayMinutes = getDelayMinutes(flight);
  const status = delayMinutes && !["landed", "cancelled"].includes(flight.flight_status)
    ? "delayed"
    : flight.flight_status || "scheduled";

  return {
    flightNumber: flight.flight?.iata || requestedFlight,
    status,
    statusText: getStatusText(flight.flight_status || status, delayMinutes),
    airline: flight.airline?.name || null,
    flightDate: flight.flight_date || requestedDate,
    departure: {
      airport: flight.departure?.iata || null,
      scheduled: flight.departure?.scheduled || null,
      actual: flight.departure?.actual || null
    },
    arrival: {
      airport: flight.arrival?.iata || null,
      scheduled: flight.arrival?.scheduled || null,
      actual: flight.arrival?.actual || null
    },
    delayMinutes,
    updatedAt: new Date().toISOString()
  };
}

async function fetchAviationstackStatus(env, flight, date) {
  const url = new URL("https://api.aviationstack.com/v1/flights");
  url.searchParams.set("access_key", env.AVIATIONSTACK_API_KEY);
  url.searchParams.set("flight_iata", flight);
  url.searchParams.set("flight_date", date);

  const response = await fetch(url.toString(), {
    cf: {
      cacheEverything: true,
      cacheTtl: 300
    }
  });
  const data = await response.json();

  if (!response.ok || data.error) {
    throw new Error(data.error?.message || `Aviationstack request failed: ${response.status}`);
  }

  return data;
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(request)
      });
    }

    const url = new URL(request.url);

    if (url.pathname !== "/status") {
      return jsonResponse(request, { error: "Not found" }, 404);
    }

    const flight = (url.searchParams.get("flight") || "").trim().toUpperCase();
    const date = (url.searchParams.get("date") || "").trim();

    if (!validateFlight(flight) || !validateDate(date)) {
      return jsonResponse(request, { error: "Invalid flight or date" }, 400);
    }

    if (!env.AVIATIONSTACK_API_KEY) {
      return jsonResponse(request, { error: "Missing AVIATIONSTACK_API_KEY secret" }, 500);
    }

    try {
      const data = await fetchAviationstackStatus(env, flight, date);
      const match = (data.data || []).find((item) => item.flight?.iata === flight) || data.data?.[0];

      if (!match) {
        return jsonResponse(request, {
          flightNumber: flight,
          status: "not_found",
          statusText: "出发前更新",
          departure: null,
          arrival: null,
          delayMinutes: null,
          updatedAt: new Date().toISOString()
        }, 404);
      }

      return jsonResponse(request, normalizeFlight(match, flight, date));
    } catch (error) {
      return jsonResponse(request, { error: "Flight status unavailable" }, 502);
    }
  }
};
