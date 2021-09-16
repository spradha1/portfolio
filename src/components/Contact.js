import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import {emailConfig} from '../email';


class Contact extends Component {

  constructor (props) {
    super(props);
    this.state = {
      formMessage: '',
      submitting: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }


  // triggered by form submit button
  handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    this.sendEmail(name, email, message);
  }


  // send email to the webmaster with all submission information
  sendEmail = async (name, email, message) => {
    const out = this;
    this.setState({
      formMessage: '',
      submitting: true
    });
    let emailParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sanjiv',
      message: message
    }

    await emailjs.send(
      emailConfig.service_id,
      emailConfig.template_id,
      emailParams,
      emailConfig.user_id
    ).then(function(response) {
      document.querySelector('.ContactForm').reset();
      out.setState({ 
        formMessage: 'Your message is sent to Sanjiv!',
        submitting: false
      });
    }, function(error) {
      out.setState({
        formMessage: 'Message failed to send. If problem persists, use the option on the menu to send me an email.',
        submitting: false
      });
    });
  }


  render () {

    const {formMessage, submitting} = this.state;
    return (
      <div className="Contactmain" id="Contact">
        <h3>CONTACT ME</h3>
        <p>You can reach out to me by filling out the form below and I will try to get back to you ASAP. There is also an option on the menu to email me. Check out my GitHub and LinkedIn profiles as well!</p>
        {formMessage &&
          <div className="FormMessage">
            {formMessage}
          </div>
        }
        <form className="ContactForm" onSubmit={this.handleSubmit}>
          <div className="formunit">
            <label>Name*</label>
            <input className="formvalue" id="name" type="text" required />
          </div>
          <div className="formunit">
            <label>Email*</label>
            <input className="formvalue" id="email" type="email" required />
          </div>
          <div className="formunit">
            <label>Message*</label>
            <textarea className="formvalue" id="message" placeholder="Type your message" required ></textarea>
          </div>
          <button disabled={submitting} type="submit" className="submitbutton">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Contact;