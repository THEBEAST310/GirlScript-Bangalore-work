import React from "react";
import styles from "./Statistics.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { getData as getStatsData, dataKeys } from "../../../services/carousel";

function Statistics() {
  const [statsData, setStatsData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getStatsData();
    console.log(data);
    if (data) {
      setStatsData(data);
    }
  };
  return (
    <div>
      {statsData.map((stats, index) => (
        <div
          key={index}
          className={styles["stats-back"]}
          style={{
            backgroundImage: `url("${stats[dataKeys.statisticsBackground]}")`,
          }}
        >
          <div className={styles["stats-overley"]}>
            <Container className="py-5">
              <Row>
                <Col xs="12" md="3" sm="6">
                  <div>
                    <div className={styles["count-text"]}>
                      {stats[dataKeys.statisticsValueOne]}
                    </div>
                    <h5 className={styles["stats-text"]}>
                      {stats[dataKeys.statisticsTitleOne]}
                    </h5>
                  </div>
                </Col>
                <Col xs="12" md="3" sm="6">
                  <div>
                    <div className={styles["count-text"]}>
                      {stats[dataKeys.statisticsValueTwo]}
                    </div>
                  </div>
                  <h5 className={styles["stats-text"]}>
                    {stats[dataKeys.statisticsTitleTwo]}
                  </h5>
                </Col>
                <Col xs="12" md="3" sm="6">
                  <div>
                    <div className={styles["count-text"]}>
                      {stats[dataKeys.statisticsValueThree]}
                    </div>
                    <h5 className={styles["stats-text"]}>
                      {stats[dataKeys.statisticsTitleThree]}
                    </h5>
                  </div>
                </Col>
                <Col xs="12" md="3" sm="6">
                  <div>
                    <div className={styles["count-text"]}>
                      {stats[dataKeys.statisticsValueFour]}
                    </div>
                    <h5 className={styles["stats-text"]}>
                      {stats[dataKeys.statisticsTitleFour]}
                    </h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
