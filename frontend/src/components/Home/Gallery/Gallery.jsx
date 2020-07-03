import React from "react";
import styles from "./Gallery.module.scss";
import { getData as getGalleryData, dataKeys } from "../../../services/gallery";
import Button from "../../Button/Button";
import Gallery_pic from "./Gallery_pic.png";
import Headings from "../../Headings/Headings";

function Gallery() {
  const [pics, setPics] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const data = await getGalleryData();
    if(data) {
      setPics(data);
    }
  }

  return (
    <section className={styles['gallery-section']}>
      <Headings>Gallery</Headings>
      <div className={styles['container']}>
        <img className={styles['image']} src={Gallery_pic} alt="Gallery_image" width="1200px"/>
        <div className={styles['middle']}>        
          <Button href="https://medium.com">VIEW ALL PHOTOS</Button>
        </div>
      </div>
      <div className={styles['gallery-list-container']}>
        {pics.map((elem, index) => {
          return (
            <GalleryItem 
              key={index} 
              event_name={elem[dataKeys.event_name]} 
              details={elem[dataKeys.details]} 
              img={elem[dataKeys.img]} 
              link={elem[dataKeys.link]} 
            />
          )}
        )}        
      </div>
    
    
    </section>
  );
}

function GalleryItem({ event_name, details, img, link }) {
  return (
    <div className={styles['gallery-item-container']}>
      <div style={{ backgroundImage: `url("${img}")` }} className={styles['gallery-item-image']}></div>
      <div className={styles['gallery-item-contents']}>
        <h4 className={styles['gallery-item-event-name']}>{event_name}</h4>
        <div className={styles['gallery-item-details']}>{details}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles['gallery-item-btn']}>Read More</a>
      </div>
    </div>
  );
}

export default Gallery;
