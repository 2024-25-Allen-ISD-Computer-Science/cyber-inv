"use client"
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import pb from "@/app/api/pocketbase";

export default function UserInfo() {
  // State variables for user data
  const [username, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [qrValue, setQrValue] = useState("Hello world"); // QR code value state

  useEffect(() => {
    // Get user data from authStore.model directly
    const user = pb.authStore.model;
    if (user) {
      setUsername(user.name);
      setTeamName(user.teamName);
      setQrValue(user.name);  // Set the QR code value to the user's name
    }
  }, []);

  return (
    <div className="w-fit h-fit p-2 border-violet-200 border-2 bg-neutral-950 shadow-2xl rounded-2xl flex flex-col items-center justify-center">
      <QRCode
        size={500}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={qrValue}  // Use the QR code value from state
        viewBox={`0 0 256 256`}
        className="rounded-2xl"
      />
      <div className="text-3xl font-bold mt-4">{username || "User name"}</div>
      <div className="text-2xl font-thin">{teamName || "Team Name"}</div>
      <div className="text-2xl font-thin">Rank</div>
    </div>
  );
}
