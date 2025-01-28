import food1 from "../assets/food2.png";
import { GalleryCard } from "./GalleryCard";

const foodGridData = Array(9).fill({
  title: "Pasta, Green Sauce & Kpomo",
  image: food1,
  imageAlt: "Pasta, Green Sauce & Kpomo",
  picks: 342,
  price: 4000,
});

export const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-200 p-4 w-full">
      {foodGridData.map((item, index) => (
        <div key={index} className="relative">
          <GalleryCard
            title={item.title}
            image={item.image}
            imageAlt={item.imageAlt}
            picks={item.picks}
            price={item.price}
            padding="px-1 py-2"
            imageStyle="h-[60px] w-[60px]"
          />
          {[1, 2, 3, 5, 6, 7].includes(index) && (
            <div className="absolute inset-0 bg-overlay opacity-80 rounded-xl"></div>
          )}
        </div>
      ))}
    </div>
  );
};
