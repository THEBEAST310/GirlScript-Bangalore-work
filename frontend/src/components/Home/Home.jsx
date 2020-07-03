import React from "react";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";


import Partnerships from "./Partnerships/Partnerships";
function Home() {
  return (
    <div>
      <Partnerships />
      <Blog />
      <Newsletter />
    </div>
  );
}

export default Home;
