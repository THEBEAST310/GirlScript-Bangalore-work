import React,{ Component } from "react";
import styles from "../Home.module.scss";
import axios from 'axios';
// import FontAwesome from 'react-fontawesome';
// import faStyles from 'font-awesome/css/font-awesome.css';

const GOOGLE_FORM_EMAIL_ID = 'entry.1045781291'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfZqJWDpel55QSxW4EF5NcFLPy_jC8WxDS-CR8Da2SnRH1BgA/formResponse'

class Newsletter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      sent:''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      sent: true
    })
    this.sendMessage()
  }

  handleFormToggle = () => {
    this.setState( 
      (prevState) => {
        const { showForm } = prevState
        return {
          showForm: !showForm
        } 
      }
    )
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)

    axios.post(GOOGLE_FORM_ACTION,formData)
      .then(() => {
        this.setState({ 
          // sent: true,
          email: ''
        })
      }).catch(() => {
        this.setState({ 
          sent: false
        })
      })
  }
  render(){
    return(
      <React.Fragment>
        <div className='form-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group row'>
              <div className='col-sm-8'>
                <input 
                  type='email' 
                  name='email'
                  id='email'
                  className='form-control'
                  value={this.state.email} 
                  onChange={this.handleChange}
                  required
                  placeHolder='Enter the e-mail address'
                />
              </div>
            </div>
            <div>
              <button type='submit' className='btn btn-sm btn-default btn-action'>Subscribe</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Newsletter;
