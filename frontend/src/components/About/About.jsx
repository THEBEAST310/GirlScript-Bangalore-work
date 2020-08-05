import React from "react";
import styles from "./About.module.scss";
import "font-awesome/css/font-awesome.min.css";
import Headings from "../Headings/Headings";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";

import { getData as getAboutData, dataKeys } from "../../services/about";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [about, setAbout] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getAboutData();
    if (data) {
      setAbout(data);
      console.log(data);
    }
  };
  return (
    <section className={styles["about-us"]}>
      <div className={styles["about-us-heading"]}>
        <Headings>ABOUT US</Headings>
      </div>

      <div className={styles["about-us-container"]}></div>
      {about.map((elem, index) => {
        return (
          <>
            <AboutItem
              key={index}
              aboutgs={elem[dataKeys.aboutgirlscript]}
              aboutgsblore={elem[dataKeys.aboutgirlscriptbangalore]}
              gsbloreimg={elem[dataKeys.girlscriptbangaloreimagelink]}
              gsimg={elem[dataKeys.girlscriptimagelink]}
              ourmission={elem[dataKeys.ourmission]}
            />
            <AboutMissionPoints missionpoints={elem[dataKeys.missionpoints]} />
            <AboutGoals goals={elem[dataKeys.goals]} />
          </>
        );
      })}
    </section>
  );
}

function AboutItem({ aboutgs, aboutgsblore, gsbloreimg, gsimg, ourmission }) {
  return (
    <div className={styles["about-us-container"]}>
      <br></br>
      <br></br>
      <h3 className={styles["about-subheading1"]}>ABOUT</h3>
      <h3 className={styles["about-subheading2"]}>GIRLSCRIPT</h3>
      <hr></hr>
      <br></br>
      <div className={styles["about-gs"]}>
        <div>{aboutgs}</div>
        <br></br>
        <center>
          <Button href="https://www.girlscript.tech/home">
            MORE ABOUT GIRLSCRIPT
          </Button>
        </center>
      </div>
      <img
        className={styles["about-gs-img"]}
        src={gsimg}
        alt={"girlscript"}
      ></img>

      <h3 className={styles["about-gs-subheading3"]}>ABOUT</h3>
      <h3 className={styles["about-gs-subheading4"]}>GIRLSCRIPT</h3>
      <h3 className={styles["about-gs-subheading5"]}>BANGALORE</h3>
      <hr className={styles["about-gsblr-line"]}></hr>

      <img
        className={styles["about-gsblr-img"]}
        src={gsbloreimg}
        alt={"girlscript bangalore"}
      ></img>
      <div className={styles["about-gs-bangalore"]}>{aboutgsblore}</div>
      <h3 className={styles["about-ourmissions-heading"]}>
        <Headings>OUR MISSION</Headings>
      </h3>
      <div className={styles["about-ourmission"]}>{ourmission}</div>
    </div>
  );
}
function AboutGoals({ goals }) {
  const goal = goals.split(",");
  return (
    <>
      <h3 className={styles["about-goals-heading"]}>
        <Headings>GOALS</Headings>
      </h3>
      <div className={styles["about-goals"]}>
        {goal.map((goals) => (
          <ol>{goals}</ol>
        ))}
      </div>
    </>
  );
}
function AboutMissionPoints({ missionpoints }) {
  const points = missionpoints.split(",");

  return (
    <>
      <div className={styles["about-mission-points"]}>
        <Container>
          <Row className="pt-5">
            <Col xs="0" sm="0" md="1" lg="1"></Col>
            {points.map((missionpoints) => (
              <>
                <Col xs="12" sm="6" md="2" lg="2">
                  <FontAwesomeIcon
                    size="5x"
                    color="#EF7326"
                    icon={faAward}
                  ></FontAwesomeIcon>
                  <div>{missionpoints}</div>
                </Col>
              </>
            ))}
            <Col xs="0" sm="0" md="1" lg="1"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default About;
