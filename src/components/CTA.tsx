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
      <div className="flex flex-col gap-8 px-4 md:px-16">
        {/* Desktop Text */}
        <div className="hidden font-pangram leading-10 text-[40px] text-center md:flex md:flex-col md:items-center md:gap-5">
          <span>tired of eating the</span>
          <Button
            isBored
            className="footer-button-border text-[32px] font-sofia border-black bg-orange"
          >
            🍛 same dishes everyday? 🍝
          </Button>
        </div>

        {/* Mobile Text */}
        <div className="font-pangram leading-10 text-[28px] text-center md:hidden">
          Are you tired of eating the same dishes{" "}
          <Button
            isBored
            className="footer-button-border text-[18px] font-sofia border-black bg-orange"
          >
            everyday?
          </Button>
        </div>

        {/* Description */}
        <div className="font-sofia leading-6 w-full max-w-[547px] text-center text-base font-medium px-2">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </div>
      </div>

      {/* Clouds */}
      <img
        src={cloud2}
        alt="cloud2"
        className="absolute object-contain w-24 sm:w-32 -left-10 -z-20"
      />
      <img
        src={cloud1}
        alt="cloud1"
        className="absolute right-0 object-contain w-24 sm:w-32 -z-20"
      />
    </div>
  );
};
