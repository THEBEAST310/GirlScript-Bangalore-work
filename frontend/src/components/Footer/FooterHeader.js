import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";

class Footer extends React.Component {
  scrollToTop = () => {
    this.props.scrollTop();
  };
  render() {
    return (
      <div>
        <Row className="py-4">
          <Col sm="12" md="12" lg="12" xs="12">
            <div className={styles["footer-menu-inner"]}>
              <Link to="/" onClick={this.scrollToTop}>
                Home
              </Link>
              <Link to="/about">About</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/team">Team</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Footer;
