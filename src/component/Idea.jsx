import React from "react";
import Container from "./CommonComponent/Container";
import Button from "./CommonComponent/Button";

const Idea = () => {
  return (
    <>
      <Container>
        <div className="flex items-center justify-between gap-[100px] py-[100px]">
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="w-[270px] rounded-xl border-solid border-[1px] border-yellow_Color py-[50px] px-[27px] text-center mb-[60px] shadow-2xl">
                <i class="fa-sharp fa-solid fa-users-medical text-yellow_Color text-[70px] mb-[30px]"></i>
                <h3 className="text-[30px] font-bold font-nunito text-text_black_color mb-3">
                  Coaching
                </h3>
                <p className="text-[18px] font-lora">
                  Loren rasion gravida auem is bibenua tase
                </p>
              </div>
              <div className="w-[270px] rounded-xl border-solid border-[1px] border-yellow_Color py-[50px] px-[27px] text-center ml-[40px] shadow-2xl">
                <i class="fa-duotone fa-solid fa-chart-simple text-yellow_Color text-[80px] mb-[30px]"></i>
                <h3 className="text-[30px] font-bold font-nunito text-text_black_color mb-3">
                SEO 
                </h3>
                <p className="text-[18px] font-lora">
                  Loren rasion gravida auem is bibenua tase
                </p>
              </div>
            </div>
            <div className="w-[270px] rounded-xl border-solid border-[1px] border-yellow_Color py-[50px] px-[27px] text-center ml-[60px] shadow-2xl">
              <i class="fa-solid fa-handshake-simple text-yellow_Color text-[80px] mb-[30px]"></i>
              <h3 className="text-[30px] font-bold font-nunito text-text_black_color mb-3">
              Digital Partner
              </h3>
              <p className="text-[18px] font-lora">
                Loren rasion gravida auem is bibenua tase
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[40px] font-black text-text_black_color font-nunito mb-[18px] mt-[100px]">
              Perfect Solution for Your{" "}
              <span className="heading">Bussiness</span>
            </h3>
            <p className="text-[18px] font-normal mb-[44px] font-lora mb-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <Button btnContent= "Read More"></Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Idea;
