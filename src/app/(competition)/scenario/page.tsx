"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { useEffect } from 'react';
import Scenario from '@/components/assets/Scenario';
import { Input } from '@/components/ui/input';
import { redirect } from 'next/navigation'// TODO: Use Suspense
import { getRound } from "../action";
import React, {useState} from 'react';
import { Container } from 'lucide-react';

export default function page() {
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
    
      const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
          setMessages([...messages, inputValue]);
          setInputValue('');
        }
      };

    useEffect(() => {
        async function checkRoundType() {
            const currentRound = await getRound();
            if (currentRound.roundType !== "scenario") {
                //redirect('/dashboard');
            }
        }

        checkRoundType(); // Initial check

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    return (
        <div className='w-full h-full'>
            <ResizablePanelGroup
                direction="horizontal"
                className="h-full w-full"
            >
                <ResizablePanel defaultSize={75} maxSize={77.5}>
                    <div className="flex h-full items-center justify-center">
                        <div className='flex -z-10 overflow-hidden'>
                            <Scenario/>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={35} maxSize={37.5}>
                    <div className="flex flex-col max-h-[86.5vh] h-full bg-background/60 backdrop-blur-md">
                        <div className="flex-grow flex w-full p-2 overflow-y-scroll flex-col-reverse">
                            <div className='grid grid-cols-1 w-full h-fit gap-3'>
                                {messages.map((message, index) => (
                                    <div key={index} className="whitespace-pre-wrap break-words">
                                        {'> ' + message}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-2">
                            <Input 
                            about="term input"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleInputSubmit}/>
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
