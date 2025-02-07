import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./component/Header";
import Banner from "./component/banner";
import Partner from "./component/Partner";
import Clients from "./component/Clients";
import Idea from "./component/Idea";
import About from "./component/About";
import Studies from "./component/Studies";
import Blog from "./component/Blog";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact"
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Partner/>
      <Clients/>
      <Idea/>
      <About/>
      <Studies/>
      <Blog/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
