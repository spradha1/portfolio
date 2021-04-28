import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import {emailConfig} from '../email';


class Contact extends Component {

  constructor (props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }


  // triggered by form submit button
  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const formError = document.querySelector('.form-error');
    formError.innerHTML = "";
    var formFailed = false;

    if (name === "" || email === "" || message === "") {
      formError.innerHTML += "Some value is missing.<br>";
      formFailed = true;
    }
    if (email.length > 0) {
      if (!this.verifyEmail(email)) {
        formFailed = true;
      }
    }

    if (!formFailed) {
      this.sendEmail(name, email, message);
    }
  }


  // verify email pattern
  verifyEmail = (email) => {
    const formError = document.querySelector('.form-error');
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const matches = email.match(emailRegex);

    if (email.length === 0 || !matches) {
      formError.innerHTML += "Email address is not valid.";
      return false;
    }
    return true;
  }


  // send email to the webmaster with all submission information
  sendEmail = (name, email, message) => {
    let emailParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sanjiv',
      message: message
    }

    emailjs.send(
      emailConfig.service_id,
      emailConfig.template_id,
      emailParams,
      emailConfig.user_id
    ).then(function(response) {
      alert('Your message is sent to Sanjiv!');
      document.querySelector('#name').value = "";
      document.querySelector('#email').value = "";
      document.querySelector('#message').value = "";
    }, function(error) {
      alert('Your message failed to send. If problem persists, use the leftmost option on the top menu to use your email client to send me a message.');
    });
  }


  render () {
    return (
      <div className="Contactmain" id="Contact">
        <h3>CONTACT ME</h3>
        <p>You can reach out to me by filling out the form below and I will try to get back to you ASAP. You can also email me through your own mail client through the leftmost option provided on the top menu, and check out my GitHub and LinkedIn profiles as well.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name*</label>
            <input className="formvalue" id="name" type="text" />
          </div>
          <div>
            <label>Email*</label>
            <input className="formvalue" id="email" type="text" />
          </div>
          <div>
            <label>Message*</label>
            <textarea className="formvalue" id="message" placeholder="Type your message"></textarea>
          </div>
          <div className='form-error'></div>
          <div className="submitbutton">
            <input type="submit" value="SUBMIT" />
          </div>
      </form>
      </div>
    )
  }
}

export default Contact;