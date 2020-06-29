import React from "react";
import "./Footer.css";
import FooterHeader from "./FooterHeader";
import FooterCopyright from "./FooterCopyright";
import { animateScroll as scroll } from "react-scroll";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <footer className="footer-back">
          <FooterHeader scrollTop={this.scrollToTop} />
          <FooterCopyright scrollTop={this.scrollToTop} />
        </footer>
      </div>
    );
  }
}

export default Footer;
