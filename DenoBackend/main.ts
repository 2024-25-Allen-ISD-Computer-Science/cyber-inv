import { type Route, route, serveDir } from "@std/http";
import PocketBase from 'npm:pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Admin credentials (if required for your use case)
const adminEmail = 'Deno@gmail.com';
const adminPassword = "N@swr'5VaB;Vr},";

// CORS helper function
function addCORSHeaders(response: Response): Response {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins or specify your frontend's URL
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

// Function to handle requests
async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return addCORSHeaders(new Response(null, { status: 204 }));
  }

  switch (path) {
    case "/":
      return addCORSHeaders(new Response("Home page"));

    case "/current-round":
      // Logic for fetching the current round
      const roundData = {
        round_type: 1, // example data
        round_length: {
          start: new Date().toISOString(),
          finish: new Date(Date.now() + 60000).toISOString(),
        },
        division: 1,
      };
      return addCORSHeaders(new Response(JSON.stringify(roundData), {
        headers: { "Content-Type": "application/json" },
      }));

    default:
      return addCORSHeaders(new Response("Not Found", { status: 404 }));
  }
}

// Server handler with CORS support
const handler = async (req: Request) => {
  return handleRequest(req);
};

export default {
  fetch: handler,
} satisfies Deno.ServeDefaultExport;
