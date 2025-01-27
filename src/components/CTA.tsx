import React from "react";
import { Button } from "./Button";
import { JoinWaitlist } from "./JoinWaitlist";

export const CTA = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div>
        <JoinWaitlist starColor="black" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="font-pangram leading-10 text-huge">
          Are you tired of eating the same dishes{" "}
          <Button
            isBored
            className="footer-button-border text-[22px] font-sofia border-black bg-orange"
          >
            everyday?
          </Button>
        </div>
        <div className="font-sofia leading-5 text-base font-medium">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </div>
      </div>
    </div>
  );
};
