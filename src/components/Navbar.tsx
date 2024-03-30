import React from "react";
import { ModeToggle } from "./theme-toggler";

interface NavbarProps {
  address: String;
}

export default function Navbar({ address }: NavbarProps) {
  return (
    <nav className="max-w-7xl justify-between">
        <span>
          {address}
        </span>
      <ModeToggle />
    </nav>
  );
}
