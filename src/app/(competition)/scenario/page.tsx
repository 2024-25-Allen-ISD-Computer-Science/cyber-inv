"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useEffect } from 'react';
import Scenario from '@/components/assets/Scenario';
import { Input } from '@/components/ui/input';

export default function page() {
    return (
        <div className='w-full h-full'>
            <ResizablePanelGroup
                direction="horizontal"
                className="h-full w-full"
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
                    <div className="flex flex-col h-full bg-background/60 backdrop-blur-md">
                        <div className="flex-grow flex w-full p-2 overflow-y-scroll">
                            <div className='grid grid-cols-1 w-full h-fit gap-5'>
                                <div className="whitespace-pre-wrap break-words">Hello</div>
                                <div className="whitespace-pre-wrap break-words">HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</div>
                                <div className="whitespace-pre-wrap break-words">Hello</div>
                            </div>
                        </div>
                        <div className="p-2">
                            <Input about="term input" />
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
