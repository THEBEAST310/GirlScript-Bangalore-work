import React, {useRef, useEffect} from 'react';
import styles from './Carousel.module.scss'
import Button from "../../Button/Button"
import nextIcon from '../../../assets/next.png'
import prevIcon from '../../../assets/prev.png'

import i1 from "../../../assets/1.jpg"
import i2 from "../../../assets/2.jpg"
import i3 from "../../../assets/3.jpg"

let imgs = [i1,i2,i3]
// //cache 
// for (let x in imgs) {
//     let a = new Image();
//     a.src = x;
// }


function Carousel(props) {

    let [imageIndex,setimageIndex] = React.useState(0)
    let updateImageIndex = (index) => {
        if (index < 0) {
            index = imgs.length + index
        }
        setimageIndex(index % imgs.length)
    }
    let next = ()=> updateImageIndex(imageIndex+1)
    let prev = ()=> updateImageIndex(imageIndex-1)

return (
    <section className={styles["banner"]}>
        <div className={styles["slider"]}> 
            <span key={imageIndex} style={{ background: "url("+imgs[imageIndex]+") no-repeat center center"}}></span>
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
        {/* <div className="v-center">
            <h1>Stupid Simple Slider</h1>
            <p>Silky smooth background image slider with css keyframes</p>	
            <button onClick={()=>updateImageIndex(imageIndex+1)}>Next</button>
        </div> */}
    </section>
    )     
}

export default Carousel;