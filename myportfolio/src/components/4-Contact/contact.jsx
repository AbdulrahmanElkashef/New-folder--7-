import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section className="content-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p>
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex ">
        <form>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email"></input>
          </div>


          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
      </div>

      <div className="animation"></div>
    </section>
  );
}
export default Contact;
