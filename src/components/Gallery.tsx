import React from "react";
import food1 from "../assets/food2.png";
import { Card } from "./Card";

const foodGridData = Array(9).fill({
  title: "Pasta, Green Sauce & Kpomo",
  image: food1,
  imageAlt: "Pasta, Green Sauce & Kpomo",
  picks: 342,
  price: 4000,
});

export const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-gray-200 p-4 w-full bg-overlay">
      {foodGridData.map((item, index) => (
        <div key={index} className="relative">
          {[1, 2, 3, 5, 6, 7].includes(index) && (
            <div className="absolute inset-0 bg-overlay opacity-80 rounded-xl"></div>
          )}
          <Card
            title={item.title}
            image={item.image}
            imageAlt={item.imageAlt}
            picks={item.picks}
            price={item.price}
            padding="px-1 py-4"
            imageStyle="h-[74px] w-[74px]"
          />
        </div>
      ))}
    </div>
  );
};
