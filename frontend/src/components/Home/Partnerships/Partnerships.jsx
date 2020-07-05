import React from "react";
import styles from "./Partnerships.module.scss";
import Carousel from "react-multi-carousel";
import { Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Headings from "../../Headings/Headings";
import {
  getData as getPartnershipData,
  dataKeys,
} from "../../../services/partnership";

function Partnerships() {
  const [partnership, setPartnerships] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getPartnershipData();
    if (data) {
      setPartnerships(data);
    }
  };

  return (
    <section className={styles["community-partnerships"]}>
      <Headings>COMMUNITY PARTNERSHIP</Headings>
      <div className={styles["partnership-item-container"]}>
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
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {partnership.map((elem, index) => {
            return (
              <PartnershipItem
                key={index}
                title={elem[dataKeys.title]}
                img={elem[dataKeys.img]}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

function PartnershipItem({ title, img }) {
  return (
    <div className={styles["community-partnerships-container"]}>
      <Row className="px-3">
        <Col>
          <img
            className={styles["community-partnership-images"]}
            src={`https://drive.google.com/uc?id=${img}`}
            alt={title}
          />
          <div className={styles["partnership-name"]}>{title}</div>
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
}
export default Partnerships;
