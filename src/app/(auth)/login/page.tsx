// src/app/(auth)/login/page.tsx
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the LoginForm component
const LoginForm = dynamic(() => import("./Login"), { ssr: false });

export default function LoginPage() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
