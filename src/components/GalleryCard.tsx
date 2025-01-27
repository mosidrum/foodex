import { MdOutlineThumbUp } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export type GalleryCardProps = {
  title?: string;
  image?: string;
  imageAlt?: string;
  picks?: number;
  price?: number;
  padding?: string;
  imageStyle?: string;
};

export const GalleryCard = ({
  title,
  image,
  imageAlt,
  picks,
  price,
  padding,
  imageStyle,
}: GalleryCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-white rounded-xl w-full h-full overflow-hidden">
      <div
        className={`${padding} rounded-xl bg-cardImagebackground flex items-center justify-center h-24`}
      >
        <img
          src={image}
          alt={imageAlt}
          className={`rounded-xl ${imageStyle} object-cover`}
        />
      </div>
      <div className="flex flex-col text-left justify-start gap-1">
        <div className="font-pangram text-sm font-semibold text-contentinentaltext1 truncate">
          {title}
        </div>
        <div className="py-0.5 px-1 font-pangram tracking-[0.15em] uppercase text-xs text-contentinentaltext2 bg-contentinental w-fit rounded-xl">
          🍲 Continental
        </div>
        <div className="flex items-center gap-2 text-xs text-gray">
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
