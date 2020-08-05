import React from "react";
import styles from "./JoinUs.module.scss";
import Headings from "../../Headings/Headings";
import { Row, Col, Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { getData as getJoinUsData, dataKeys } from "../../../services/joinUs";

function JoinUs() {
  const [joinUs, setJoinsUs] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getJoinUsData();
    if (data) {
      setJoinsUs(data);
    }
  };

  return (
    <div className={styles["join-us-back"]}>
      <Row>
        <Col className="pb-5">
          <Headings>JOIN US</Headings>
        </Col>
      </Row>
      <Row className="ml-4">
        {joinUs.map((elem, index) => {
          return (
            <CardItem
              key={index}
              title={elem[dataKeys.title]}
              description={elem[dataKeys.description]}
              img={elem[dataKeys.img]}
              link={elem[dataKeys.link]}
            />
          );
        })}
        ;
      </Row>
    </div>
  );
}
function CardItem({ title, img, description, link }) {
  return (
    <Col xs="12" sm="12" md="6" lg="3" className="pz-5">
      <div className={styles["zoom"]}>
        <Card className={styles["card-back"]}>
          <center>
            <Card.Img
              variant="top"
              src="holder.js"
              src={img}
              className={styles["card-image"]}
            />
          </center>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className={styles["button-display"]}>
              <Button variant="primary" href={link}>
                Register
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default JoinUs;
