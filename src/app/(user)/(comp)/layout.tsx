import React from 'react';
import Navbar, { NavItemProps } from "@/components/Comp/Navbar";
import { pb } from '@/lib/pocketbase';
import navbarProps from './action';


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full flex flex-col ">
      <div className='flex-grow-0'>
        <Navbar
          currentRound='None ATM'
          points={0}
          username='hello'
          roundTime={new Date()}
        />
      </div>
      <div className="flex-grow w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}