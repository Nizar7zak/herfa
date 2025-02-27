"use client";
import { useSectionStore } from "@/lib/store";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaXTwitter, FaTiktok } from "react-icons/fa6";

const SocialIcons = () => {
  const { activeSection } = useSectionStore();
  const icons = [
    { id: "instagram", icon: <FaInstagram />, link: "#" },
    { id: "facebook", icon: <FaFacebookF />, link: "#" },
    { id: "linkedin", icon: <FaLinkedinIn />, link: "#" },
    { id: "behance", icon: <FaBehance />, link: "#" },
    { id: "twitter", icon: <FaXTwitter />, link: "#" },
    { id: "tiktok", icon: <FaTiktok />, link: "#" },
  ];

  const color = [ "الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية" ].includes( activeSection ) ? "text-white bg-secondary"
    : "text-secondary bg-white"
  return (
    <div className="flex gap-2 justify-center">
      { icons.map( ( { id, icon, link } ) => (
        <a
          key={ id }
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
          className={ `w-[30px] h-[30px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-active ${color}` }
        >
          <span className="text-xl">{ icon }</span>
        </a>
      ) ) }
    </div>
  );
};

export default SocialIcons;
