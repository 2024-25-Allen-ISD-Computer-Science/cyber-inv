"use client";
import Tilt from 'react-parallax-tilt';
import React from 'react';
import ico from '~/ico.svg';
import Image from 'next/image';
export default function TiltLogo() {
    return (
        <Tilt>
            <Image src={ico} width={500} height={500} alt="Eagle Logo" className="" />
        </Tilt>
    );
}