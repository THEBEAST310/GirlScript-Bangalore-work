import React, { useRef, useEffect } from "react";
import styles from "./Carousel.module.scss";
import Button from "../../Button/Button";
import nextIcon from "../../../assets/next.png";
import prevIcon from "../../../assets/prev.png";
import {
  getData as getCarouselData,
  dataKeys,
} from "../../../services/homeData";
const HEADING = "Welcome to GirlScript Bangalore";
const SUBHEADING = "Education First";
const TYPEWRITERSPEED = 100; 

const cacheImg = path => new Promise(resolve => {
  const img = new Image()
  img.onload = () => resolve(path)
  img.onerror = () => resolve(path)
  img.src = path
});

const delay = time => new Promise(resolve => setTimeout(resolve,time))

async function typeWriter(elem, txt) {
  elem.innerHTML = "";
  let i = 0;
  while (i < txt.length) {
    await delay(TYPEWRITERSPEED);
    elem.innerHTML += txt.charAt(i++);
  }
}

function Carousel(props) {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getCarouselData();
    let carousalList = [];
    data = data.map(
      (x) => (
        carousalList.push(x[dataKeys.firstCarouselImage]),
        carousalList.push(x[dataKeys.secondCarouselImage]),
        carousalList.push(x[dataKeys.thirdCarouselImage])
      )
    );
    if (carousalList) {
      setImages(carousalList);
      //cache
      for await (let img of carousalList.map(cacheImg));
    }
  };

  let [imageIndex, setimageIndex] = React.useState(0);
  let updateImageIndex = (index) => {
    if (index < 0) {
      index = images.length + index;
    }
    setimageIndex(index % images.length);
  };
  let next = () => updateImageIndex(imageIndex + 1);
  let prev = () => updateImageIndex(imageIndex - 1);

  let heading = React.useRef()
  let subheading = React.useRef()

  React.useEffect(()=>{
    if (!heading.current.innerHTML ) {
        typeWriter(heading.current,HEADING)
          .then(()=>delay(TYPEWRITERSPEED * 4))
          .then(()=>typeWriter(subheading.current,SUBHEADING))
    }
  },[])
  return (
    <section className={styles["banner"]}>
      <div className={styles["slider"]}>
        <span
          key={imageIndex}
          style={{
            backgroundImage:
              "url(" + images[imageIndex] + ")",
          }}
        ></span>
      </div>
      <div className={"row m-auto " + styles["content"]}>
        <div className="offset-xl-1 col-xl-1 col-2 d-flex">
          <img
            height="40px"
            onClick={prev}
            className="m-auto"
            src={prevIcon}
            alt="prev"
          />
        </div>
        <div className="my-auto col-8">
          <div>
            <div className="d-flex flex-column">
            <p className={styles["heading"]+ " m-auto"} ref={heading} />
            <p className={styles["subheading"] + " mx-auto"} ref = {subheading} />
            </div> 
            <div className="mt-5">
              <Button className>JOIN US</Button>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-2 d-flex">
          <img
            height="40px"
            onClick={next}
            className="m-auto"
            src={nextIcon}  
            alt="next"
          />
        </div>
      </div>
    </section>
  );
}

export default Carousel;
