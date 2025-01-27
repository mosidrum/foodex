import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="shadow-footer-card bg-white text-huge flex flex-col gap-16 pt-14 pb-8 px-8 leading-10">
      <div className="font-pangram">
        Sign up to{" "}
        <Button
          isBored
          className="footer-button-border bg-purple border-black my-1"
        >
          chowafrica
        </Button>{" "}
        and say{" "}
        <Button
          isBored
          className="footer-button-border bg-black border-green my-1"
        >
          goodbye 👋🏽
        </Button>{" "}
        to mealtime stress
      </div>
      <Button isBored className="font-sofia py-4 px-11 bg-green border-white">
        Join WaitList
      </Button>
    </div>
  );
};
