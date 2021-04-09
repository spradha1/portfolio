import React, { Component } from 'react';


class Contact extends Component {

  constructor (props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }


  handleSubmit = (event) => {
    alert('Your message is sent to Sanjiv!');
    event.preventDefault();
  }

  // send email to the webmaster with all submission information
  sendEmail = () => {

  }


  render () {
    return (
      <div className="Contactmain">
        <h3>CONTACT ME</h3>
        <p>You can reach out to me by filling out the form below. You can also email me through the option provided on the top menu, and check out my GitHub and LinkedIn profiles as well.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name*</label>
            <input className="formvalue" type="text" />
          </div>
          <div>
            <label>Email*</label>
            <input className="formvalue" type="text" />
          </div>
          <div>
            <label>Message*</label>
            <textarea className="formvalue" placeholder="Type your message"></textarea>
          </div>
          <div className='form-failed-alert'></div>
          <div className="submitbutton">
            <input type="submit" value="SUBMIT" />
          </div>
      </form>
      </div>
    )
  }
}

export default Contact;