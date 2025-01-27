import React from "react";
import logo from "../assets/logo.png";

import { Button } from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navabar = () => {
  return (
    <div className="w-full bg-white flex-between-center py-4 px-6">
      <div>
        <img src={logo} />
      </div>
      <div className="flex-between-center w-1/2">
        <Button className="bg-orange py-2 px-4 font-sofia">
          Join Waitlist
        </Button>
        <RxHamburgerMenu size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};
