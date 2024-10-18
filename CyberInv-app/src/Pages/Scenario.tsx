import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import constants from "@/constants";

export default function Scenario() {
  document.title = "Scenarios - " + constants.appName;
  return (
    <div className="">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen min-w-full max-w-md rounded-lg border p-10 border-none"
      >
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Interface</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35}>
          <div className="flex h-full items-center justify-center p-6">
            <iframe
              src="https://tty.codermerlin.academy/"
              className="w-full h-full"
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
