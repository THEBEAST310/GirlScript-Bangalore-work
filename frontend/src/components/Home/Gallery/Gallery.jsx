import React from "react";
import styles from "./Gallery.module.scss";
import Button from "../../Button/Button";
import Headings from "../../Headings/Headings";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  getData as getImageData,
  dataKeys as imagekeys,
} from "../../../services/homeData";

function Gallery() {
  const [images, setimages] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const imagedata = await getImageData();
    if (imagedata) {
      setimages(imagedata);
    }
  };

  return (
    <Container>
      <Row className="py-5">
        <Col>
          <Headings>GALLERY</Headings>
        </Col>
      </Row>
      <div className={styles["container"]}>
        {images.map((elem, index) => (
          <div key={index}>
            <Row className="py-2">
              <Col xs="7" sm="7" md="7" lg="7">
                <Image
                  alt="Gallery Home Image"
                  src={elem[imagekeys.fourthGallaryPhoto]}
                  className={styles["col-image-rec"]}
                  fluid
                />
              </Col>
              <Col className="pl-1" xs="5" sm="5" md="5" lg="5">
                <Image
                  alt="Gallery Home Image"
                  src={elem[imagekeys.firstGallaryPhoto]}
                  className={styles["col-image-sq"]}
                  fluid
                />
              </Col>
            </Row>
            <Row className="py-2">
              <Col xs="5" sm="5" md="5" lg="5">
                <Image
                  alt="Gallery Home Image"
                  src={elem[imagekeys.thirdGallaryPhoto]}
                  className={styles["col-image-sq"]}
                  fluid
                />
              </Col>
              <Col className="pl-1" xs="7" sm="7" md="7" lg="7">
                <Image
                  alt="Gallery Home Image"
                  src={elem[imagekeys.secondGallaryPhoto]}
                  className={styles["col-image-rec"]}
                  fluid
                />
              </Col>
            </Row>
          </div>
        ))}
        <div class={styles["overlay"]}></div>
        <div className={styles["button"]}>
          <Button href="">VIEW ALL PHOTOS</Button>
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
