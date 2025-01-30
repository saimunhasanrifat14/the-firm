import React from "react";
import Header from "./component/Header";
import Banner from "./component/banner";
import Partner from "./component/Partner";
import Clients from "./component/Clients";
import Idea from "./component/Idea";
import About from "./component/About";
const App = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Partner></Partner>
      <Clients></Clients>
      <Idea></Idea>
      <About></About>
    </>
  );
};

export default App;
