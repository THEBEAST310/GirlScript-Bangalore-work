import React from "react";
import "./JoinUs.css";
import Headings from "../Headings/Headings";
import { Row, Col, Card } from "react-bootstrap";
import Button from "../Button/Button";
import { getData as getJoinUsData, dataKeys } from "../../services/joinUs";

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
    <div>
      <Row className="pb-5">
        <Col>
          <Headings>JOIN US</Headings>
        </Col>
      </Row>
      <div className="cardContainer">
        {joinUs.map((elem, index) => {
          return (
            <CardItem
              key={index}
              title={elem[dataKeys.title]}
              desc={elem[dataKeys.description]}
              img={elem[dataKeys.img]}
              link={elem[dataKeys.link]}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
function CardItem({ title, img, description, link }) {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "black",
        border: "white solid 2px",
        color: "white",
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>Register</Button>
      </Card.Body>
    </Card>
  );
}

export default JoinUs;
