import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="shadow-footer-card bg-white text-huge flex flex-col md:flex-row md:justify-between md:items-center gap-16 p-10 my-9 mx-4 leading-10 rounded-lg">
      <div className="font-pangram font-semibold leading-10 md:w-1/2 md:flex md:justify-between md:flex-wrap break-words">
        <div className="flex flex-wrap items-center">
          <div className="whitespace-normal">Sign up to</div>
          <Button
            isBored
            className="footer-button-border bg-purple border-black my-1 mx-2"
          >
            chowafrica
          </Button>
          <div className="whitespace-normal">and say</div>
        </div>
        <div className="flex flex-wrap items-center mt-2 md:mt-0">
          <Button
            isBored
            className="footer-button-border bg-black border-green my-1 mx-2"
          >
            goodbye 👋🏽
          </Button>
          <div className="whitespace-normal">to mealtime stress</div>
        </div>
      </div>
      <Button isBored className="font-sofia py-4 px-11 bg-green border-white">
        Join WaitList
      </Button>
    </div>
  );
};
