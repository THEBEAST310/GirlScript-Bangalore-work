import React from "react";
import styles from "./Home.module.scss";
import Newsletter from "./Newsletter/Newsletter";

class Home extends React.Component{
  render(){
    return(
      <div>
        Home
        <Newsletter />
      </div>
    )
  }
}

export default Home;
