import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const socialMedia = [FaFacebook, FaTwitter, FaInstagram];

export const SideMenu = () => {
  return (
    <div className="font-sofia flex flex-col justify-start gap-4 cursor-pointer">
      <div className="py-2 pl-5 pr-2 text-subMenu border-l-4 border-l-orange">
        Home
      </div>
      <div className="py-2 pl-5 pr-2 text-subMenu">Join Waitlist</div>
      <div className="flex items-center gap-3 py-2 pl-5">
        {socialMedia.map((IconComponent, index) => (
          <div key={index} className="p-2 rounded-md bg-iconbg">
            <IconComponent color="#d87023" />
          </div>
        ))}
      </div>
    </div>
  );
};
