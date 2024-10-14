"use client";
import React, { useState, useEffect } from "react";
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

// Accept onChange and value as props from the parent
export default function Grade({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  // Initialize local state for the dropdown with the value prop
  const [position, setPosition] = useState(value);

  // Sync local state with the parent value prop whenever it changes
  useEffect(() => {
    setPosition(value);
  }, [value]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{position || "Select Grade"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Grade Level</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(newValue) => {
            setPosition(newValue); // Update local state
            onChange(newValue); // Notify parent of the change
          }}
        >
          <DropdownMenuRadioItem value="9th">9th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="10th">10th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="11th">11th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="12th">12th</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
