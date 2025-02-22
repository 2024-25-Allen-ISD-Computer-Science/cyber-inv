
"use server"
import { pb } from "@/lib/pocketbase";
export async function loginUser(email: string, password: string) {
    try {
      // Authenticate the user with PocketBase
      const authData = await pb.collection('Accounts').authWithPassword(email, password);
  
      // If successful, return the authenticated user data
      return {
        success: true,
        user: authData.record, // Contains user details
        token: authData.token, // Authentication token
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: "Invalid email or password. Please try again.",
      };
    }
  }