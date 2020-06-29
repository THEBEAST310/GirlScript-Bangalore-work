import React from "react";

import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";

class FooterCopyright extends React.Component {
  scrollToTop = () => {
    this.props.scrollTop();
  };

  render() {
    return (
      <div className="copyright-back">
        <Container>
          <Row className="pb-3 pt-4">
            <Col
              sm="12"
              md="1"
              lg="1"
              xs="12"
              className="scroll-top-icon"
            ></Col>
            <Col sm="12" md="10" lg="10" xs="12">
              <p style={{ color: "white", fontSize: "15px" }}>
                Copyright <FontAwesomeIcon icon={faCopyright} /> 2020. Made with{" "}
                <FontAwesomeIcon icon={faHeart} color="red" /> by GirlScript
                Bangalore
              </p>
            </Col>
            <Col sm="12" md="1" lg="1" xs="12" className="scroll-top-icon">
              <a onClick={this.scrollToTop}>
                <FontAwesomeIcon icon={faCaretSquareUp} size="2x" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FooterCopyright;
