import { ReactNode } from "react";
import person from "../assets/ikwuegbu.png";
import thumbs from "../assets/thumb-up.png";
import onions from "../assets/onions.png";
import turkey from "../assets/turkey.png";
import dollar from "../assets/dollar.png";

type NotificationProps = { message: ReactNode; icon: string; index?: number };

const notificationList: NotificationProps[] = [
  {
    message: "Picked by 314 people today",
    icon: thumbs,
  },
  {
    message: "Exclude onions.",
    icon: onions,
  },
  {
    message: "Must include turkey",
    icon: turkey,
  },
];

const NotificationItem = ({ message, icon, index }: NotificationProps) => {
  const topPosition = index !== undefined ? 10 * index * 4 : 0;
  const leftPosition = index !== undefined ? -16 + index * 40 : 0;

  return (
    <div
      className="absolute w-48 flex items-center justify-start mt-[300px] p-1.5 gap-1.5 text-white rounded-md border-[2px] border-white bg-green"
      style={{ top: `${topPosition}px`, left: `${leftPosition}px` }}
    >
      <img src={icon} alt={icon} className="h-4 w-4 object-fill" />
      <div className="text-small font-semibold font-sofia">{message}</div>
    </div>
  );
};

export const Notify = () => {
  return (
    <div className="relative mx-auto flex justify-center items-center">
      <div className="relative">
        <img src={person} alt="Person" />
        <div className="">
          {notificationList.map((item, index) => (
            <NotificationItem
              key={index}
              message={item.message}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
        <div className="absolute w-48 flex flex-col items-start justify-center -mt-[400px] -right-10 lg:-right-20 p-1.5 gap-1.5 text-white rounded-md border-[2px] border-white bg-orange">
          <img src={dollar} alt={dollar} className="h-4 w-4 object-fill" />
          <div className="text-small font-semibold font-sofia">
            You can buy all for <span className="text-[#01FFC2]">N2,500</span>{" "}
            at Yaba
          </div>
        </div>
      </div>
    </div>
  );
};
