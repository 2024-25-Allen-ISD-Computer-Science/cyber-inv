"use client"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useEffect } from 'react';
import Scenario from '@/components/assets/Scenario';
import { Input } from '@/components/ui/input';
export default function page() {

    return (


        <ResizablePanelGroup
            direction="horizontal"
            className="min-w-full max-w-md rounded-lg border  border-none min-h-4/5"
        >
            <ResizablePanel defaultSize={65}>
                <div className="flex h-full items-center justify-center">
                    <div className='absolute -z-10 overflow-hidden'>
                        <Scenario />
                    </div>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={35}>
                <div className="flex flex-col h-full bg-zinc-950">
                    <div className="flex-grow flex  justify-between w-full">
                        <div className="">Hello</div>
                    </div>
                    <div className="p-2">
                        <Input about="term input" />
                    </div>
                </div>

            </ResizablePanel>
        </ResizablePanelGroup>
    );
}