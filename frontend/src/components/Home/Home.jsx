import React from "react";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";
import Gallery from "./Gallery/Gallery";


import Partnerships from "./Partnerships/Partnerships";
function Home() {
  return (
    <div>
      <Partnerships />
      <Gallery />
      <Blog />
      <Newsletter />
    </div>
  );
}

export default Home;
