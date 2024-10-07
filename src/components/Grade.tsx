"use client";
import { useState } from "react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button";
  
export default function Grade(){
    const [position, setPosition] = React.useState("9th");

    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{position}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Grade Level</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={setPosition}
          >

            <DropdownMenuRadioItem value="9th">
              9th
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="10th">
              10th
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="11th">
              11th
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="12th">
              12th
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}