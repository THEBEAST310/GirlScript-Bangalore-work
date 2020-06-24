import React from "react";
import styles from "./Home.module.scss";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";

function Home() {
  return (
    <div>
      {/* <Blog /> */}
      <Newsletter />
    </div>
  );
}

export default Home;
