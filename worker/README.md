# Flight Status Worker

This Cloudflare Worker proxies Aviationstack flight status requests for the travel site.

## Setup

1. Reset the Aviationstack API key before production use.
2. Save the new key as a Cloudflare Worker secret:

   ```bash
   wrangler secret put AVIATIONSTACK_API_KEY
   ```

3. Deploy the Worker:

   ```bash
   wrangler deploy
   ```

4. Copy the deployed Worker URL and set `data-flight-status-endpoint` in `index.html` to:

   ```text
   https://<worker-url>/status
   ```

The API key must never be committed to this repository or placed in frontend JavaScript.
