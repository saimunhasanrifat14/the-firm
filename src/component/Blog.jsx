import React from "react";
import Container from "./CommonComponent/Container";
import BlogCard from "./CommonComponent/BlogCard";
import Button from "./CommonComponent/Button";

const Blog = () => {
  return (
    <div className="bg-[#F2F2F2] py-[82px]">
      <Container>
        <div className="mb-[64px] flex justify-center items-center">
          <div className="z-10 relative">
            <h3 className="text-[40px] font-black text-text_black_color font-nunito ">
            Our {" "}
              <span className="heading">Blogs</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[72px]">
          <BlogCard
            avatar={"./src/assets/man1.png"}
            name={"Alex Jones"}
            date={"28,Aug 2020, 07:48:00"}
            image={"./src/assets/blog1.png"}
          ></BlogCard>
          <BlogCard
            avatar={"./src/assets/man2.png"}
            name={"Tom Hanks"}
            date={"23,Jan 2021, 03:44:00"}
            image={"./src/assets/blog2.png"}
          ></BlogCard>
          <BlogCard
            avatar={"./src/assets/man3.png"}
            name={"Dustin Jones"}
            date={"14,Feb 2023, 09:23:00"}
            image={"./src/assets/blog3.png"}
          ></BlogCard>
        </div>
        <div className="mt-[34px] text-center">
          <Button btnContent={"View More"}></Button>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
