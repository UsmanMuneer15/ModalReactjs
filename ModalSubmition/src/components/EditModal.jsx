import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function EditModal() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gcc664q',
        'template_6jsicy6', form.current,
        'Gvz6ehEKM20Rd5udR')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Contact Us
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Enter Details RTM Request</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <form ref={form} onSubmit={sendEmail}>

                <label>Name:</label><br></br>
                <input style={{ width: "30%" }} type="text" name="user_name" /><br></br>
                <label>Email:</label><br></br>
                <input style={{ width: "30%" }} type="email" name="user_email" /><br></br>
                <label>Phone No:</label><br></br>
                <input style={{ width: "30%" }} type='country' name="user_phone"></input><br></br>
                <label>Company Name:</label><br></br>
                <input style={{ width: "30%" }} type='country' name="user_company"></input><br></br>
                <label>Country:</label><br></br>
                <input style={{ width: "30%" }} type='country' name="user_country"></input><br></br>
                <label>State:</label><br></br>
                <input style={{ width: "30%" }} type='country' name="user_state"></input><br></br>
                <label>Message:</label><br></br>
                <textarea style={{ width: "30%" }} name="message" /><br></br>
                <input type="submit" value="Send" /><br></br>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal