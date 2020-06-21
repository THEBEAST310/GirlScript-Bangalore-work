import React from "react";
import styles from "./Home.module.scss";
import Blog from "./Blog/Blog";
import Carousel from "./Carousel/Carousel";
function Home() {
  return (
    <div  style={{background : "black"}}>
      <Carousel />
      <Blog />
    </div>
  );
}

export default Home;
