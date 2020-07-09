import React from "react";
import styles from "./Gallery.module.scss";
// import { getData as getGalleryData, dataKeys } from "../../../services/gallery";
import Button from "../../Button/Button";
import Headings from "../../Headings/Headings";
import { Container, Row, Col, Image } from "react-bootstrap";
import { getData as getImageData, dataKeys as imagekeys } from "../../../services/homeData";

function Gallery() {
  // const [pics, setPics] = React.useState([]);
  const [images, setimages] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
  //   const data = await getGalleryData();
  //   if (data) {
  //     setPics(data);
  //   }

    const imagedata = await getImageData();
    if (imagedata){
      setimages(imagedata);
    }
  };

  const devstyles1={
    marginLeft: '-50px',
    position: "relative"
  } 
  const devstyles2={
    marginBottom: '15px'
  } 
  // Get the elements with class="column"
  var elements = document.getElementsByClassName("column");
  // Declare a loop variable
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
  
  return (
    <Container>
      <Row className="py-5">
        <Col>
          <Headings>GALLERY</Headings>
        </Col>
      </Row>
        {images.map((elem, index) => (
          <Container style={ devstyles1 }>
            <div className={styles["container"]} >
              <Row style={ devstyles2 } key={index}>
                <div className={styles["row"]}>
                  <Col xs="7" sm="7" md="7" lg="7">
                    <div className="column">
                      <Image
                        alt="Gallery Home Image"
                        src={elem[imagekeys.secondGallaryPhoto]}
                        width={630}
                        height={350}
                      />
                    </div>
                  </Col>
                  <Col xs="5" sm="5" md="5" lg="5">
                    <div className="column">
                      <Image
                        alt="Gallery Home Image"
                        src={elem[imagekeys.firstGallaryPhoto]}
                        width={500}
                        height={350}
                      />
                    </div>
                  </Col>
                </div> 
              </Row>
              <Row key={index}>
                <div className={styles["row"]}>
                  <Col xs="5" sm="5" md="5" lg="5">
                    <div className="column">
                      <Image
                        alt="Gallery Home Image"
                        src={elem[imagekeys.fourthGallaryPhoto]}
                        width={445}
                        height={350}
                      />
                    </div>
                  </Col>
                  <Col xs="7" sm="7" md="7" lg="7">
                    <div className="column">
                      <Image
                        alt="Gallery Home Image"
                        src={elem[imagekeys.thirdGallaryPhoto]}
                        width={685}
                        height={350}
                      />
                    </div>
                  </Col>
                </div>
              </Row>
              <div className={styles["middle"]}>
                <Button href="https://medium.com">VIEW ALL PHOTOS</Button>
              </div>
            </div>
          </Container>
        ))}
    </Container>
  );
}

// function GalleryItem({ event_name, details, img, link }) {
//   return (
//     <div className={styles["gallery-item-container"]}>
//       <div
//         style={{ backgroundImage: `url("${img}")` }}
//         className={styles["gallery-item-image"]}
//       ></div>
//       <div className={styles["gallery-item-contents"]}>
//         <h4 className={styles["gallery-item-event-name"]}>{event_name}</h4>
//         <div className={styles["gallery-item-details"]}>{details}</div>
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles["gallery-item-btn"]}
//         >
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// }

export default Gallery;
