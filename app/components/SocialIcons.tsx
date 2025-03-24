"use client";
import { FaInstagram, FaLinkedinIn, FaBehance, FaTiktok } from "react-icons/fa6";

const SocialIcons = () => {
  const icons = [
    { id: "instagram", icon: <FaInstagram />, link: "#" },
    { id: "linkedin", icon: <FaLinkedinIn />, link: "#" },
    { id: "behance", icon: <FaBehance />, link: "#" },
    { id: "tiktok", icon: <FaTiktok />, link: "#" },
  ];

  return (
    <div className="flex gap-2 justify-center">
      { icons.map( ( { id, icon, link } ) => (
        <a
          key={ id }
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
          className={ `w-[30px] h-[30px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-active text-secondary bg-white` }
        >
          <span className="text-xl">{ icon }</span>
        </a>
      ) ) }
    </div>
  );
};

export default SocialIcons;
