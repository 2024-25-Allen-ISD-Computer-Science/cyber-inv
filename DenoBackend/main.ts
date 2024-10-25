import { type Route, route, serveDir } from "@std/http";
import PocketBase from 'npm:pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const adminEmail = 'Deno@gmail.com';
const adminPassword = "N@swr'5VaB;Vr},";

async function authenticateAdmin() {
  try {
    const authResponse = await pb.admins.authWithPassword(adminEmail, adminPassword);
    console.log("Admin authenticated successfully:", authResponse);

    if (pb.authStore.isValid) {
      console.log("Auth token is valid:", pb.authStore.token);
    } else {
      console.error("Auth token is not valid.");
    }
  } catch (error) {
    console.error("Failed to authenticate admin", error);
  }
}

// New authenticatePlayer function
async function authenticatePlayer(reqToken: string) {
  try {
    // Set the auth token in PocketBase's auth store
    pb.authStore.save(reqToken, "");

    // Check if the token is valid
    if (!pb.authStore.isValid) {
      throw new Error("Invalid player authentication token");
    }

    const playerRecord = await pb.collection("player").authRefresh();
    return new Response(JSON.stringify(playerRecord), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to authenticate player", error);
    return new Response("Failed to authenticate player", { status: 401 });
  }
}

async function handleRequest(req: Request) {
  const url = new URL(req.url);
  const path = url.pathname;

  switch (path) {
    case "/":
      return new Response("Home page");

    case "/authenticate":
      const reqToken = req.headers.get("Authorization")?.split(" ")[1];
      if (!reqToken) {
        return new Response("Authorization token not provided", { status: 400 });
      }
      return await authenticatePlayer(reqToken);

  




    case (path.startsWith("/players/") && path.length > 8): 
      const playerName = path.split("/")[2];
      return await handleSpecificPlayer(playerName);

    default:
      return defaultHandler(req);
  }
}

const handler = async (req: Request) => {
  return handleRequest(req);
};

export default {
  fetch: handler,
} satisfies Deno.ServeDefaultExport;
