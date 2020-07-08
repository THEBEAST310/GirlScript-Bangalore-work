import React from "react";
import styles from "./AboutHome.module.scss";
import Headings from "../../Headings/Headings";
import Button from "../../Button/Button";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  getData as getAboutHomeData,
  dataKeys,
} from "../../../services/homeData";

function AboutHome() {
  const [aboutData, setAboutHomeData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getAboutHomeData();
    if (data) {
      setAboutHomeData(data);
    }
  };

  return (
    <Container>
      <Row className="py-5">
        <Col>
          <Headings>ABOUT US</Headings>
        </Col>
      </Row>
      <div>
        {aboutData.map((elem, index) => (
          <Row key={index}>
            <Col xs="12" sm="12" md="6" lg="6">
              <Image
                alt="About Us Home Image"
                src={elem[dataKeys.aboutUsImage]}
                width={800}
                height={660}
                fluid
              />
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
              <div className={styles["about-us-home-text"]}>
                <p>{elem[dataKeys.aboutUs]}</p>
              </div>
              <Button href="">KNOW MORE</Button>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
}
export default AboutHome;
