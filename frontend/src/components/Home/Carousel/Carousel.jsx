import React, {useRef, useEffect} from 'react';
import styles from './Carousel.module.scss'
import Button from "../../Button/Button"
import nextIcon from '../../../assets/next.png'
import prevIcon from '../../../assets/prev.png'
import { getData as getCarouselData, dataKeys } from "../../../services/carousel";


function Carousel(props) {
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
      getData();
    }, []);
  
    const getData = async() => {
      let data = await getCarouselData();
      data = data.map(x=> x[dataKeys.image])
      if(data) {
        setImages(data);
        //cache 
        for (let x in data) {
            (new Image()).src = x;
        }
      }
    }
  

    let [imageIndex,setimageIndex] = React.useState(0)
    let updateImageIndex = (index) => {
        if (index < 0) {
            index = images.length + index
        }
        setimageIndex(index % images.length)
    }
    let next = ()=> updateImageIndex(imageIndex+1)
    let prev = ()=> updateImageIndex(imageIndex-1)

return (
    <section className={styles["banner"]}>
        <div className={styles["slider"]}> 
            <span key={imageIndex} style={{ background: "url("+images[imageIndex]+") no-repeat center center"}}></span>
        </div>
        <div className={"w-100 d-flex m-auto " + styles['content']}>
            <img height="40px" onClick={prev} className="my-auto ml-auto" src={prevIcon} alt="prev"/>
            <div className="my-auto">
                <div>
                    <p className={[styles['animation'] ,styles['heading'], "my-auto"].join(' ')}>Welcome to GirlScript Bangalore</p>
                    <div className="d-flex">
                        <p className={[styles['animation'] ,styles['subheading'], "mx-auto"].join(' ')}>Education First</p>

                    </div>
                    <div className="mt-5">
                        <Button className>JOIN US</Button>
                    </div> 
                </div>
            </div>
            <img height="40px" onClick={next} className="my-auto mr-auto" src={nextIcon} alt="next"/>
            
        </div>
    </section>
    )     
}

export default Carousel;