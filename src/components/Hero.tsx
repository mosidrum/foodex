import { JoinWaitlist } from "./JoinWaitlist";
import asap from "../assets/asap.png";
import { Button } from "./Button";
import { Card } from "./Card";
import { cardData } from "../utils";
import phone from "../assets/Home-app.png";

export const Hero = () => {
  return (
    <div className="pt-[98px] bg-black bg-custom-bg bg-cover bg-center md:pt-0 md:flex-1 md:overflow-y-auto md:h-screen md:rounded-lg">
      <div className="flex flex-col justify-center items-center md:mt-32 p-4">
        <div className="mb-3 md:mt-8">
          <JoinWaitlist className="text-white" starColor="white" />
        </div>
        <div className="flex items-center">
          <div className="text-white mr-1 font-pangram text-massive font-medium leading-9 md:text-6xl md:leading-tight">
            Find chow,
          </div>
          <img
            src={asap}
            alt="asap"
            className="bg-cover bg-center md:mt-4 md:w-32"
          />
        </div>
        <div className="text-white mt-6 mb-10 font-base text-center leading-5">
          The patient dog eats left overs. Be the first to know when we launch.
          Join our Waitlist
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full max-w-md px-4 pb-[98px] md:flex-row md:max-w-2xl md:pb-16 md:px-0">
          <input
            className="w-full bg-white text-black border-none outline-none font-sofia rounded-2xl p-4 text-large md:flex-1"
            placeholder="Enter your email"
          />
          <Button
            isBored
            className="w-2/4 py-4 px-11 border-white bg-green md:w-auto"
          >
            Join Waitlist
          </Button>
        </div>
      </div>

      <div className="w-full overflow-hidden relative md:mt-8">
        <div className="flex items-end animate-marquee whitespace-nowrap">
          {cardData.map((card, index) => (
            <div key={index} className="inline-block mx-2">
              <Card
                title={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                picks={card.picks}
                price={card.price}
                padding="py-6 px-14"
                imageStyle="w-24 h-24"
              />
            </div>
          ))}
          <img src={phone} alt="phone" className="md:hidden" />
          {cardData.map((card, index) => (
            <div key={`duplicate-1-${index}`} className="inline-block mx-2">
              <Card
                title={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                picks={card.picks}
                price={card.price}
                padding="py-6 px-14"
                imageStyle="w-24 h-24"
              />
            </div>
          ))}
          {cardData.map((card, index) => (
            <div key={`duplicate-2-${index}`} className="inline-block mx-2">
              <Card
                title={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                picks={card.picks}
                price={card.price}
                padding="py-6 px-14"
                imageStyle="w-24 h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
