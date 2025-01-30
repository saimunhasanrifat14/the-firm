import React from "react";
import map from "../assets/map.png";
import Button from "./CommonComponent/Button";

const Footer = () => {
  return (
      <div className="relative">
        <picture>
          <img className="w-full" src={map} alt={map} />
        </picture>
        <div className="contactForm py-[60px] px-[70px] w-[938px] flex flex-col items-center justify-center absolute bg-white shadow-2xl rounded-2xl">
          <h3 className="text-[40px] font-black text-text_black_color text-center font-nunito mb-[50px]">
            Get in <span className="heading">Touch</span>
          </h3>
          <div className="flex justify-between flex-wrap gap-y-[50px] mb-[67px]">
            <div className="flex flex-col">
              <label
                className="text-[14px] font-nunito text-[#A5A5A5] pl-[10px]"
                htmlFor=""
              >
                Name
              </label>
              <input
                className="w-[363px] py-[5px] px-[10px] border-b-[3px] border-b-solid border-b-[#A5A5A5] bg-transparent"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-nunito text-[#A5A5A5] pl-[10px]"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="w-[363px] py-[5px] px-[10px] border-b-[3px] border-b-solid border-b-[#A5A5A5] bg-transparent"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-nunito text-[#A5A5A5] pl-[10px]"
                htmlFor=""
              >
                Phone
              </label>
              <input
                className="w-[363px] py-[5px] px-[10px] border-b-[3px] border-b-solid border-b-[#A5A5A5] bg-transparent"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-nunito text-[#A5A5A5] pl-[10px]"
                htmlFor=""
              >
                Subject
              </label>
              <select
                className="w-[363px] py-[5px] px-[10px] border-b-[3px] border-b-solid border-b-[#A5A5A5] bg-transparent"
                type="text"
              />
            </div>
          </div>
          <Button btnContent={"Submit"}></Button>
        </div>
      </div>
  );
};

export default Footer;
