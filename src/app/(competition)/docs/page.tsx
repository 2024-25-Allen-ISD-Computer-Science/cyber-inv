"use client";
import BLUR1 from "~/BLUR1.svg"
import Image from "next/image";
import React, {useState} from 'react';

export default function page() { 
    return (
        <div className='w-full h-full'>
            <div className="flex justify-center grid grid-cols">
                <Image src={BLUR1} height={500} width={500} alt="blur1" className="absolute justify-center w-full h-full -z-20 overflow-clip opacity-20"/>
                <h1 className="text-4xl mb-8">Scenario Round Command Documentation</h1>
                <div className="text-2xl">
                    insert commands here
                </div>
            </div>    
        </div>
    );
}