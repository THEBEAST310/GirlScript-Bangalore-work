import React, { Component } from "react";
import "../Newsletter/Newsletter.css";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Demo google form
const GOOGLE_FORM_EMAIL_ID = "entry.1045781291";
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfZqJWDpel55QSxW4EF5NcFLPy_jC8WxDS-CR8Da2SnRH1BgA/formResponse";
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
      <React.Fragment>
        <div className="form-container">
          <h2 className="sectionHeader">NEWSLETTER</h2>
          <div className="row center">
            <div className="col-lg-12">
              <form onSubmit={this.handleSubmit} className="row" noValidate>
                <div className="form-group col-lg-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      placeHolder="Enter The Email ID"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-sm btn-default btn-action"
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
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="socialIcons">
              <a href="https://twitter.com/GirlscriptBLR"><i className="fa fa-twitter"></i></a>
              <a href="https://www.facebook.com/girlscriptbangalore"><i className="fa fa-facebook-square"></i></a>
              <a href="https://www.linkedin.com/in/girlscriptbangalore/"><i className="fa fa-linkedin-square"></i></a>
              <a href="#"><i className="fa fa-paper-plane"></i></a>
              <a href="https://www.instagram.com/girlscriptbangalore/"><i className="fa fa-instagram"></i></a>
              <a href="https://medium.com/girlscript-bangalore"><i className="fa fa-medium"></i></a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;

