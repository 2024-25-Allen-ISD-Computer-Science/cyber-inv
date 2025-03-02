
"use server"
import { pb } from "@/lib/pocketbase";
import { cookies } from 'next/headers'

export async function loginUser(email: string, password: string) {
  const cookieStore = await cookies()
    try {
      // Authenticate the user with PocketBase
      const authData = await pb.collection('Accounts').authWithPassword(email, password);
      const token = pb.authStore.token
      cookieStore.set('pb_auth', token)
      console.log(authData)
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