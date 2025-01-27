import { MdOutlineThumbUp } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export type CardProps = {
  title?: string;
  image?: string;
  imageAlt?: string;
  picks?: number;
  price?: number;
  padding?: string;
  imageStyle?: string;
};

export const Card = ({
  title,
  image,
  imageAlt,
  picks,
  price,
  padding,
  imageStyle
}: CardProps) => {
  return (
    <div className="flex flex-col gap-4 p-2 mb-3 bg-white rounded-xl">
      <div
        className={`${padding} rounded-xl bg-cardImagebackground flex items-center justify-center`}
      >
        <img src={image} alt={imageAlt} className={`rounded-xl ${imageStyle}`} />
      </div>
      <div className="flex flex-col text-left justify-start gap-1 pb-4">
        <div className="font-pangram text-large font-semibold text-contentinentaltext1">
          {title}
        </div>
        <div className="py-0.5 px-1 font-pangram tracking-[0.15em] uppercase text-small text-contentinentaltext2 bg-contentinental w-fit rounded-xl">
          🍲 Continental
        </div>
        <div className="flex items-center gap-2 text-tiny text-gray">
          <div className="flex items-center">
            <MdOutlineThumbUp />
            {picks}
          </div>
          <GoDotFill size={10} />
          <div>Approx. N{price}</div>
        </div>
      </div>
    </div>
  );
};
