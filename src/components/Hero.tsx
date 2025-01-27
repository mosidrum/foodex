import React from "react";
import { JoinWaitlist } from "./JoinWaitlist";
import asap from "../assets/asap.png";
import { Button } from "./Button";
import { Card } from "./Card";
import phoneApp from "../assets/Home-app.png";

export const Hero = () => {
  return (
    <div className="pt-[98px] bg-black bg-custom-bg bg-cover bg-center">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-3">
          <JoinWaitlist className="text-white" starColor="white" />
        </div>
        <div className="flex items-center">
          <div className="text-white mr-1 font-pangram text-massive font-medium leading-9">
            Find chow,
          </div>
          <img src={asap} alt="asap" className="bg-cover" />
        </div>
        <div className="text-white mt-6 mb-10 font-base text-center leading-5">
          The patient dog eats left overs. Be the first to know when we launch.
          Join our Waitlist
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full max-w-md px-4 pb-[98px]">
          <input
            className="w-full bg-white text-black border-none outline-none font-sofia rounded-2xl p-4 text-large"
            placeholder="Enter your email"
          />
          <Button isBored className="w-2/4 py-4 px-11 border-white bg-green">
            Join Waitlist
          </Button>
        </div>
        <div className="flex items-end">
          <Card padding="py-6 px-14" imageStyle="w-24 h-24" />
          <Card padding="py-6 px-14" imageStyle="w-24 h-24" />
          <img src={phoneApp} alt="phone-app" className="object-contain" />
        </div>
      </div>
    </div>
  );
};
