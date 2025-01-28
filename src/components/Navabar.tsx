import logo from "../assets/logo.png";
import { Button } from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideMenu } from "./SideMenu";

export const Navabar = () => {
  return (
    <div className="w-full bg-white flex-between-center py-4 px-6 md:h-screen md:w-44 md:flex-col md:justify-start md:py-8 md:px-4">
      <div className="md:mb-8">
        <img src={logo} alt="logo" className="md:w-12" />
      </div>
      <div className="flex-between-center w-1/2 md:hidden">
        <Button className="bg-orange py-2 px-4 font-sofia md:w-full">
          Join Waitlist
        </Button>
        <RxHamburgerMenu size={30} className="cursor-pointer md:mt-4" />
      </div>
      <div className="hidden md:inline-block">
        <SideMenu />
      </div>
    </div>
  );
};
