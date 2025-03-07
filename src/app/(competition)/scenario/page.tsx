"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { use, useEffect, useRef } from 'react';
import Scenario from '@/components/assets/Scenario';
import { Input } from '@/components/ui/input';
import { redirect } from 'next/navigation'// TODO: Use Suspense
import { getRound } from "../action";
import React, {useState} from 'react';
import { Container, Mouse } from 'lucide-react';
import { string } from 'zod';

<style>
{`
    @keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0;
    }
    100% {
        transform: scale(1.1);
        opacity: 1;
    }
    }
`}
</style>

    export default function page() {
        const [prevCmd, setprevCmd] = useState('')
        const [inputValue, setInputValue] = useState('')
        const [messages, setMessages] = useState([])
        const [power, setPower] = useState(100)
        const [water, setWater] = useState(100)

        const [visible, setVisible] = useState(true)

        const events = {
            test:() => setVisible(false)
        }

        const commands = {
            echo: (input: string) => setMessages([...messages, input + '\n' + input.substring(5, input.length)]),
            help: (input: string) => setMessages([...messages, input + `\n insert some stuff here
    More info can be found in the docs page`]),
            status: (input: string) => setMessages([...messages, input + '\n' + retrieveStatus(input.substring(7, input.length))]),
            restore: () => {setTimeout(() => {setVisible(true); setMessages([...messages, '\n Status restored'])}, 2000)},
            repair: (input: string) => setMessages([...messages, input + '\n' + repair(input.substring(7, input.length))]),
        }

        function retrieveStatus(text: string) {
            if (!visible) {
                return 'Error: Could not retrieve status'
            }
            if (text.toLowerCase() === 'power') {
                return 'Power: ' + power + '%'
            } else if (text.toLowerCase() === 'water') {
                return 'Water: ' + water + '%'
            } else if (text.toLowerCase() === 'all') {
                return 'Power: ' + power + '% \n' + 'Water: ' + water + '%'
            } else {
                return 'Could not find status for: ' + text
            }
        }

    function repair(text: string) {
        if (text.toLowerCase() === 'power') {
            const randomPercent = Math.round(Math.random() * (15 - 5) + 5)
            setPower(Math.min(power + randomPercent, 100))
            return 'Power efficiency restored by ' + randomPercent + '%'
        } else if (text.toLowerCase() === 'water') {
            const randomPercent = Math.round(Math.random() * (15 - 5) + 5)
            setWater(Math.min(water + randomPercent, 100))
            return 'Water efficiency restored by ' + randomPercent + '%'
        } else {
            return 'Could not repair: ' + text
        }
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    };
    
    function handleInputSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {

        switch (true) {
            case inputValue.startsWith('echo'):
                commands.echo(inputValue)
                break
            case inputValue === 'help':
                commands.help(inputValue)
                break
            case inputValue === 'restore':
                commands.restore()
                break
            case inputValue.startsWith('status'):
                commands.status(inputValue)
                break
            case inputValue.startsWith('repair'):
                commands.repair(inputValue)
                break
            default:
                setMessages([...messages, inputValue + '\n bash: ' + inputValue + ' command not found'])
        }

        if (inputValue.trim().length !== 0) {
            setprevCmd(inputValue)
        }

        setInputValue('');
        } else if (e.key ==='ArrowUp') {
            setInputValue(prevCmd)
        }
    };    

    const updateStatus = (status : number) => {
        if (status > 80) {
            return 'rgba(0,255,0,1) 25%, rgba(0,255,0,0.25) 50%'
        } else if (status > 50) {
            return 'rgba(255,255,0,1) 25%,rgba(255,255,0,0.25) 50%'
        } else if (status > 0) {
            return 'rgba(255,0,0,1) 25%, rgba(255,0,0,0.25) 50%'
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {

            setPower((prevPower) => Math.max(prevPower - 1, 0))
            setWater((prevWater) => Math.max(prevWater - 1, 0))
            
            const randomEvent = Math.round(Math.random() * 100) / 100
            
            if (randomEvent <= .5) {
                events.test()
            }

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function checkRoundType() {
            const currentRound = await getRound();
            if (currentRound.roundType !== "scenario") {
                redirect('/dashboard');
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
                    <div className="flex flex-col h-full bg-background/60 backdrop-blur-md ">
                        <div className='flex grid grid-cols-1 border-2 w-full h-[15vh] items-center justify-center'>
                            <div className='flex items-center justify-center'>
                            <div className={`w-[5vw] h-[5vh] opacity-${visible ? '100' : '0'}`} style={{background: `radial-gradient(circle, ${updateStatus(power)}, transparent 0%)`, animation: visible ? 'pulse 2s infinite' : 'none'}}/>
                                <div>{visible ? 'Power Status' : '⚠️ Error ⚠️'}</div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className={`w-[5vw] h-[5vh] opacity-${visible ? '100' : '0'}`} style={{background: `radial-gradient(circle, ${updateStatus(water)}, transparent 0%)`, animation: visible ? 'pulse 2s infinite' : 'none'}}/>
                                <div>{visible ? 'Water Status' : '⚠️ Error ⚠️'}</div>
                            </div>
                        </div>
                        <div className="flex-grow flex w-full max-h-[64vh] p-2 overflow-y-scroll flex-col-reverse">
                            <div className='grid grid-cols-1 w-full h-fit gap-3'>
                                {messages.map((message, index) => (
                                    <div key={index} className="whitespace-pre-wrap break-words">
                                        {'$ ' + message}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-2">
                            <Input
                            id='terminal input'
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleInputSubmit}
                            autoComplete='off'
                            />  
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}