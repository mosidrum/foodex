import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="shadow-footer-card bg-white text-huge flex flex-col md:flex md:flex-row md:justify-between md:items-center gap-16 p-10 my-9 mx-9 leading-10 rounded-lg">
      <div className="font-pangram font-semibold leading-10 md:w-1/2">
        <div>Sign up to</div>
        <Button
          isBored
          className="footer-button-border bg-purple border-black my-1"
        >
          chowafrica
        </Button>{" "}
        <div>and say</div>
        <Button
          isBored
          className="footer-button-border bg-black border-green my-1"
        >
          goodbye 👋🏽
        </Button>
        <div>to mealtime stress</div>
      </div>
      <Button isBored className="font-sofia py-4 px-11 bg-green border-white">
        Join WaitList
      </Button>
    </div>
  );
};
