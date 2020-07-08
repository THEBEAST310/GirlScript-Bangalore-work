import React, { Component } from "react";
import Headings from "../Headings/Headings";
import styles from "./Newsletter.module.css";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GOOGLE_FORM_EMAIL_ID = "entry.165895151";
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScA34YTyQPDH4X-7XEBzY77afIEbWB-8q7xh968wfSLgz4Ghw/formResponse";
const notify = () => toast.error("Invalid E-mail Address");

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      sent: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      this.setState({
        sent: true,
      });
      this.sendMessage();
    } else {
      notify();
    }
  };

  handleFormToggle = () => {
    this.setState((prevState) => {
      const { showForm } = prevState;
      return {
        showForm: !showForm,
      };
    });
  };

  sendMessage = () => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email);

    axios
      .post(GOOGLE_FORM_ACTION, formData)
      .then(() => {
        this.setState({
          email: "",
        });
      })
      .catch(() => {
        this.setState({
          sent: false,
        });
      });
  };
  render() {
    return (
      <div className={styles["form-container"]}>
        <Headings>NEWSLETTER</Headings>
        <div className={styles["rw"]}>
          <form
            onSubmit={this.handleSubmit}
            className={styles["rw"]}
            noValidate
          >
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className={styles["inputField"]}
                value={this.state.email}
                onChange={this.handleChange}
                required
                placeHolder="Enter The Email ID"
              />
            </div>
            <button
              type="submit"
              className={"btn-sm btn-default btn-action " + styles["btn"]}
            >
              Subscribe
            </button>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
            />
          </form>
        </div>
        <div className={styles["socialIcons"]}>
          <a href="https://twitter.com/GirlscriptBLR">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/girlscriptbangalore">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/girlscriptbangalore/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          {/* What link to put here ? */}
          <a href="#">
            <i className="fa fa-paper-plane"></i>
          </a>
          <a href="https://www.instagram.com/girlscriptbangalore/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://medium.com/girlscript-bangalore">
            <i className="fa fa-medium"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default News;
