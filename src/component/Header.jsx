import React from "react";
import Container from "./CommonComponent/Container";
import logo from "../assets/logo.png";
import Button from "./CommonComponent/Button";
const Header = () => {
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
    <>
      <nav className="mt-[20px]">
        <Container>
          <div className="flex justify-between">
          <picture>
            <img src={logo} alt={logo} />
          </picture>
          <div className="flex gap-[50px] ">
            <ul className="flex items-center gap-x-[44px]">
              {menuItem.map((item)=>{
                return(
                  <li key={item.id}>
                    <a href="#" className="menuItem font-nunito text-[18px] font-bold text-text_black_color capitalize">{item.name}</a>
                  </li>
                )
              })}
            </ul>
            <Button btnContent = "Get In Touch"></Button>
          </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
