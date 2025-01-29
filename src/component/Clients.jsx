import React from "react";
import Container from "./CommonComponent/Container";
import ClientBanner from '../assets/clientBanner.png'

const Clients = () => {
  return (
    <div className="bg-bg_gray_two">
      <Container>
        <div className="flex justify-between items-center py-[100px]">
          <div className="w-[60%]">
            <h3 className="text-[40px] font-black text-text_black_color font-nunito mb-[22px]">
              Frustration of <span className="heading">Clients</span>
            </h3>
            <p className="text-[18px] font-normal mb-[44px] font-lora pr-[140px] mb-[26px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div>
                <p className="text-[18px] ml-4 font-lora text-text_black_color"><i class="fa-duotone fa-solid fa-question text-yellow_Color mr-4 text-[22px] mb-[12px]"></i>Loren rasion gravida auem is bibenua tase</p>
                <p className="text-[18px] ml-4 font-lora text-text_black_color"><i class="fa-duotone fa-solid fa-question text-yellow_Color mr-4 text-[22px] mb-[12px]"></i>Lorem Ipsum is simply dummy text of the.</p>
                <p className="text-[18px] ml-4 font-lora text-text_black_color"><i class="fa-duotone fa-solid fa-question text-yellow_Color mr-4 text-[22px] mb-[12px]"></i>Printing and typesetting industry. Lorem Ipsum</p>
                <p className="text-[18px] ml-4 font-lora text-text_black_color"><i class="fa-duotone fa-solid fa-question text-yellow_Color mr-4 text-[22px]"></i>When an unknown printer took a galley of type and scrambled it</p>
            </div>
          </div>
          <picture className="w-[40%]">
            <img src={ClientBanner} alt={ClientBanner} />
          </picture>
        </div>
      </Container>
    </div>
  );
};

export default Clients;
