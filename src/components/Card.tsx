import { MdOutlineThumbUp } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import food2 from "../assets/food2.png";

export type CardProps = {
  title: string;
  image: string;
  imageAlt: string;
  picks: number;
  price: number;
};

export const Card = () => {
  return (
    <div className="flex flex-col gap-4 p-2 mb-3 bg-white rounded-xl">
      <div className="py-6 px-14 rounded-xl bg-cardImagebackground">
        <img src={food2} alt="food" className="rounded-xl w-24 h-24" />
      </div>
      <div className="flex flex-col text-left justify-start gap-1 pb-4">
        <div className="font-pangram text-large font-semibold text-contentinentaltext1">
          Shredded Roasted Chicken
        </div>
        <div className="py-0.5 px-1 font-pangram tracking-[0.15em] uppercase text-small text-contentinentaltext2 bg-contentinental w-fit rounded-xl">
          🍲 Continental
        </div>
        <div className="flex items-center gap-2 text-tiny text-gray">
          <div className="flex items-center">
            <MdOutlineThumbUp />
            100
          </div>
          <GoDotFill size={10} />
          <div>Approx. N5000</div>
        </div>
      </div>
    </div>
  );
};
