import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const menuItem = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Cases",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 5,
      name: "Blog",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];
  return (
    <footer>
      <div className="flex flex-col justify-center items-center mt-[350px] mb-[43px]">
        <img className="mb-[64px]" src={logo} alt={logo} />
        <div className="flex gap-[50px] ">
          <ul className="flex items-center gap-x-[44px]">
            {menuItem.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href="#"
                    className="menuItem font-nunito text-[18px] font-bold text-text_black_color capitalize"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-[40px] mt-[40px]">
            <i class="fa-brands fa-facebook-f text-[18px] hover:text-yellow_Color "></i>
            <i class="fa-brands fa-twitter text-[18px] hover:text-yellow_Color "></i>
            <i class="fa-brands fa-youtube text-[18px] hover:text-yellow_Color "></i>
            <i class="fa-brands fa-linkedin-in text-[18px] hover:text-yellow_Color "></i>
            <i class="fa-brands fa-pinterest-p text-[18px] hover:text-yellow_Color "></i>
        </div>
        <span className="mt-[50px] text-[12px] font-nunito text-[#A5A5A5] tracking-[5px]">Copyrights ©2020 Thefirm. All Right Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
