import { Gallery } from "./Gallery";
import { Notify } from "./Notify";
import and from "../assets/and.png";
import andLove from "../assets/andLove.png";

export const Foods = () => {
  return (
    <div className="relative bg-light rounded-lg">
      <img
        src={andLove}
        alt="andLove"
        className="absolute top-10 object-contain"
      />
      <img
        src={and}
        alt="and"
        className="absolute right-2 bottom-2 object-contain"
      />

      <div className="py-6 px-8">
        <Gallery />
      </div>
      <Notify />
    </div>
  );
};
