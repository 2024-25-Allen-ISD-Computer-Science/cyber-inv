"use client"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useEffect } from 'react';
import Image from 'next/image';
import map from '~/map.svg' 
export default function Scenario() {
    
    return (
        <div className="w-full h-[90vh] pt-10">
            
            <ResizablePanelGroup
                direction="horizontal"
                className="h-max min-w-full max-w-md rounded-lg border  border-none"
            >
                <ResizablePanel defaultSize={65}>
                    <div className="flex h-full items-center justify-center p-1">
<Image src={map} alt='map' height={700} width={900} className='fill-teal-200'/>
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