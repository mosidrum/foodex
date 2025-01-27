import { CardProps } from "../components/Card";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

export const cardData: CardProps[] = [
  {
    title: "Pasta, Green Sauce & Kpomo",
    image: food1,
    imageAlt: "Pasta, Green Sauce & Kpomo",
    picks: 342,
    price: 4000,
  },
  {
    title: "Egg-cooked Fried Rice & Peas",
    image: food2,
    imageAlt: "Egg-cooked Fried Rice & Peas",
    picks: 500,
    price: 5200,
  },
  {
    title: "Shredded Roasted Chicken",
    image: food3,
    imageAlt: "Shredded Roasted Chicken",
    picks: 751,
    price: 3500,
  },
  {
    title: "Souse Fries & Bacon",
    imageAlt: "Souse Fries & Bacon",
    image: food4,
    picks: 184,
    price: 10000,
  },
];
