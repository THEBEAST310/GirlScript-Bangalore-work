import React from "react";
import styles from './Partnerships.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {getData as getPartnershipData, dataKeys} from "../../../services/partnership";

function Partnerships(){
    const[partnership, setPartnerships]=React.useState([]);
    React.useEffect(()=>{
        getData();
    },[]);
    const getData=async()=>{
        
        const data =await getPartnershipData();
        console.log(data);
        if(data){
            setPartnerships(data);
        }
    
    }
    
    return (
        <section className={styles['community-partnerships']}>
        <h2 className={styles['heading']}>Community Partnerships</h2>
        <div className={styles['partnership-item-container']}>
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
        {partnership.map((elem,index) =>{
            return(
            <PartnershipItem
                key={index}
                title={elem[dataKeys.title]}
                img={elem[dataKeys.img]} 
            />
        )}
    )}
    
    </Carousel>
        </div>
        </section>
    );
}

function PartnershipItem({title,img}){
    return(
        
        <div className={styles['community-partnerships-container']}>           
            <img className={styles['community-partnership-images']}
                src={`https://drive.google.com/uc?id=${img}`}
                alt={title}
            />            
            <div className={styles['partnership-name']}>{title}</div>
            <hr></hr>          
        </div>        
    );
}
export default Partnerships;             