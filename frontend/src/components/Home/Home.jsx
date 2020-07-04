import React from "react";
import Blog from "./Blog/Blog";
import Gallery from "./Gallery/Gallery";
import Carousel from "./Carousel/Carousel";
import AboutHome from "./AboutHome/AboutHome";
import Statistics from "./Statistics/Statistics";
import Partnerships from "./Partnerships/Partnerships";

function Home() {
  return (
    <div>
      <Carousel />
      <AboutHome />
      <Statistics />
      <Gallery />
      <Blog />
      <Partnerships />
    </div>
  );
}

export default Home;
