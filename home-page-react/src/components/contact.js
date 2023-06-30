import './index.css';

function ContactUs() {
  return (
    <div id="contact-us" className="contact-us-bg">
      <h1 className="contact-us-heading pt-5">Contact Us</h1>
      <div className="d-flex flex-row justify-content-center">
        <div className="contact-us-card d-flex flex-row justify-content-center">
          <div className="contact-us-form">
            <input className="mt-3" type="text" placeholder="Name" /><br />
            <input className="mt-3" type="email" placeholder="E-mail" /><br />
            <textarea className="mt-3" name="Enter Your Message" rows="4" cols="23"></textarea>
            <br /><button className="mt-3 form-btn" type="button">Submit</button>
          </div>
          <div className="ml-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d794.2330143195201!2d80.26067637228043!3d13.060089841780256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687670457397!5m2!1sen!2sin"
              width="500" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <div className="contact-us-contact-details d-flex flex-row justify-content-center mt-5">
        <div className="mt-2 mr-3">
          <i className="fa-solid fa-phone fa-2x"></i>
        </div>
        <div className="mr-5">
          <p>+9112345677</p>
          <p className="line-height">+9198753562</p>
        </div>
        <div className="mt-2 mr-3">
          <i className="fa-solid fa-globe fa-2x"></i>
        </div>
        <div className="mr-5">
          <p>www.motofeatures.com</p>
          <p className="line-height">www.motofeatures.com</p>
        </div>
        <div className="mt-2 mr-3">
          <i className="fa-solid fa-location-dot fa-2x"></i>
        </div>
        <div className="mr-5">
          <p>1234\56, xyz street, pqrs town</p>
          <p className="line-height">abcd city-600001</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center mt-5">
        <i className="fa-brands fa-facebook fa-2x mr-4"></i>
        <i className="fa-brands fa-twitter fa-2x mr-4"></i>
        <i className="fa-brands fa-instagram fa-2x mr-4"></i>
        <i className="fa-brands fa-google-plus-g fa-2x mr-4"></i>
      </div>
    </div>
  );
}

export default ContactUs;
