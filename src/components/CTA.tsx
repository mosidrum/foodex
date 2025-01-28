import { Button } from "./Button";
import { JoinWaitlist } from "./JoinWaitlist";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

export const CTA = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-6 pt-16">
      <div className="mb-6">
        <JoinWaitlist starColor="black" />
      </div>
      <div className="flex flex-col gap-8 p-16">
        <div className="hidden font-pangram leading-10 text-[64px] text-center md:flex md:flex-col md:items-center md:gap-5">
          <span> tired of eating the</span>
          <Button
            isBored
            className="footer-button-border text-[40px] font-sofia border-black bg-orange"
          >
            🍛 same dishes everyday? 🍝{" "}
          </Button>
        </div>
        <div className="font-pangram leading-10 text-huge text-center md:hidden">
          Are you tired of eating the same dishes{" "}
          <Button
            isBored
            className="footer-button-border text-[22px] font-sofia border-black bg-orange"
          >
            everyday?
          </Button>
        </div>
        <div className="font-sofia leading-5 w-[547px] text-center text-lg font-medium">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </div>
      </div>
      <img
        src={cloud2}
        alt="clound2"
        className="absolute object-contain -left-32 -z-20"
      />
      <img
        src={cloud1}
        alt="clound1"
        className="absolute right-0 -z-20 object-contain"
      />
    </div>
  );
};
