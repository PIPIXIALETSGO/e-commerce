import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-section mt-5">
        <div className="container">
          <h2 className="section-title">Keep in touch with us</h2>
          <p className="section-subtitle">
            Be the first to know about new skincare launches, exclusive offers,
            <br />
            and expert beauty tips for radiant skin.
          </p>

          <div className="row contact-boxes">
            {/* Address  */}
            <div className="contact-col">
              <div className="contact-box bg-transparent border-0">
                <i className="ri-map-pin-line icon"></i>
                <h5>Address</h5>
                <p>Rendom IT Solution, 2nd Floor, Siddharth Complex,</p>
                <p className="mb-4">Alkapuri, Vadodara, Gujarat -39007</p>
                <a href=""></a>
              </div>
            </div>

            {/* Contact  */}
            <div className="contact-col">
              <div className="contact-box bg-transparent border-0">
                <i className="ri-phone-line icon"></i>
                <h5>Contact</h5>
                <p>
                  <strong>Mobile:</strong>+91 98765 43210
                </p>
                <p>
                  <strong>Hotline:</strong>1800 123 4567
                </p>
                <p>
                  <strong>Email:</strong> support@renomtech.in
                </p>
              </div>
            </div>

            {/* Hours  */}
            <div className="contact-col">
              <div className="contact-box bg-transparent border-0">
                <i className="ri-time-line icon"> </i>
                <h5>Hour of operation</h5>
                <p>
                  <strong>Mon - Fri:</strong>08:30 - 20:00
                </p>
                <p>
                  <strong>Sat- Sun:</strong>09:30 - 21:30
                </p>
                <p>
                  <strong>Email:</strong> support@renomtech.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-page">
        {/* Map Section  */}
        <section className="map-selection container">
          <iframe
            title="Our Location"
            className="map rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.6849750988376!2d-73.57791902372423!3d45.49628817107435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bbf7c3b2f2f%3A0xa095f5fc1f0ed5f8!2sMachi%20Machi!5e0!3m2!1sen!2sca!4v1759270530676!5m2!1sen!2sca"
            allowfullscreen
          ></iframe>
        </section>

        {/* Contact From Selection  */}
        <section className="message-section">
            <h2 className="form-title">Send A Message</h2>
            <form className="contact-form">
                <div className="row">
                    <input type="text" placeholder="Name"className="input" />
                    <input type="email" placeholder="Email"className="input" />
                </div>
                <div className="row">
                    <textarea placeholder="Message" className="textarea"></textarea>
                </div>
                <button type="submit" className="btn px-5">Submit</button>
            </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
