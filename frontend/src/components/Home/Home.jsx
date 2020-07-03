import React from "react";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";
import Gallery from "./Gallery/Gallery";
import Carousel from "./Carousel/Carousel";


import Partnerships from "./Partnerships/Partnerships";
function Home() {
  return (
    <div  style={{background : "black"}}>
       <Carousel />
      <Partnerships />
      <Gallery />
      <Blog />
      <Newsletter />
    </div>
  );
}

export default Home;
