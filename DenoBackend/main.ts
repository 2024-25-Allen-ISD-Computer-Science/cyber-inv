// Import required modules
import { type Route, route, serveDir } from "@std/http";
import PocketBase from 'npm:pocketbase';

// Initialize PocketBase
const pb = new PocketBase('http://127.0.0.1:8090');

// Admin credentials
const adminEmail = 'Deno@gmail.com';
const adminPassword = "N@swr'5VaB;Vr},";

// Function to authenticate as admin
async function authenticateAdmin() {
  try {
    const authResponse = await pb.admins.authWithPassword(adminEmail, adminPassword);
    console.log("Admin authenticated successfully:", authResponse);

    // Check if the authStore has a valid token
    if (pb.authStore.isValid) {
      console.log("Auth token is valid:", pb.authStore.token);
    } else {
      console.error("Auth token is not valid.");
    }
  } catch (error) {
    console.error("Failed to authenticate admin", error);
  }
}

// Function to handle each route based on the request
async function handleRequest(req: Request) {
  const url = new URL(req.url);
  const path = url.pathname;

  // Route handlers
  switch (path) {
    case "/":
      return new Response("Home page");

    case "/users":
      const userId = url.searchParams.get("id");
      return userId ? new Response(userId) : new Response("User ID not provided", { status: 400 });

    case "/static":
      return serveDir(req);

    case "/players":
      return await handlePlayersList();

    case "/players/full":
      return await handleFullPlayersList();

    case "/players/topFive":
      return await handleTopFivePlayers();

    case (path.startsWith("/players/") && path.length > 8): // Matches /players/:name
      const playerName = path.split("/")[2]; // Extract player name
      return await handleSpecificPlayer(playerName);

    default:
      return defaultHandler(req);
  }
}

// Route to fetch player list from PocketBase
async function handlePlayersList() {
  try {
    await authenticateAdmin();  // Ensure admin is authenticated

    // Fetch paginated records list (page 1)
    const resultList = await pb.collection('player').getList(1);
    return new Response(JSON.stringify(resultList), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch player list", error);
    return new Response("Failed to fetch player list", { status: 500 });
  }
}

// Route to fetch full player list from PocketBase
async function handleFullPlayersList() {
  try {
    await authenticateAdmin();  // Ensure admin is authenticated

    // Fetch all records
    const records = await pb.collection('player').getFullList();
    return new Response(JSON.stringify(records), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch full player list", error);
    return new Response("Failed to fetch full player list", { status: 500 });
  }
}

// Route to fetch a specific player by name
async function handleSpecificPlayer(name: string) {
  try {
    await authenticateAdmin();  // Ensure admin is authenticated

    // Fetch a player with a specific name
    const record = await pb.collection('player').getFirstListItem(`name="${name}"`);
    return new Response(JSON.stringify(record), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch player", error);
    return new Response("Failed to fetch player", { status: 500 });
  }
}

// Route to fetch the top five players
async function handleTopFivePlayers() {
  try {
    await authenticateAdmin();  // Ensure admin is authenticated

    // Fetch the top 5 players sorted by a specific field (e.g., score or rank)
    const topFive = await pb.collection('player').getList(1, 5);

    return new Response(JSON.stringify(topFive), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch top five players:", error);
    return new Response("Failed to fetch top five players: " + error.message, { status: 500 });
  }
}


// Default handler for unmatched routes
function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

// Main fetch handler
const handler = async (req: Request) => {
  return handleRequest(req);
};

export default {
  fetch: handler,
} satisfies Deno.ServeDefaultExport;
