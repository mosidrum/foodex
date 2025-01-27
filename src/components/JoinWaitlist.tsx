import { PiStarFourFill } from "react-icons/pi";

type JoinWaitlistProps = {
  starColor: string;
  className?: string;
};

const ICON_SIZE = 10;

export const JoinWaitlist = ({ starColor, className }: JoinWaitlistProps) => (
  <div className="font-pangram flex items-center gap-2 font-normal">
    <PiStarFourFill color={starColor} size={ICON_SIZE} />
    <div
      className={`uppercase text-small leading-6 tracking-[0.3em] ${className}`.trim()}
    >
      Join the chowafrica waitlist
    </div>
    <PiStarFourFill color={starColor} size={ICON_SIZE} />
  </div>
);
