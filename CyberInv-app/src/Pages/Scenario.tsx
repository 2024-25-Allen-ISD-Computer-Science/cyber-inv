import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import { useEffect } from "react";
import constants from "@/constants";

export default function Scenario() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  document.title = "Scenarios - " + constants.appName;
  return (
    <div className="w-full h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-max min-w-full max-w-md rounded-lg border  border-none"
      >
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full items-center justify-center p-1">
            <span className="font-semibold">Interface</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35}>
          <div className="flex h-full items-center justify-center">
          <span className="font-semibold">Terminal</span>

          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
