import React from "react";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact">
      <iframe
        title="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135666.0569838992!2d60.54805195667966!3d56.84771945857839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c165eaa062db4b%3A0xd50243d7f7567f20!2sYekaterinburg%2C%20Sverdlovsk%20viloyati%2C%20Rossiya!5e0!3m2!1suz!2s!4v1676093391639!5m2!1suz!2s"
      >
      </iframe>
      <div className="contact__container">
        <div className="contact__container__card">
          <h4>Контакты</h4>
          <h6>
            Россия, город Екатеринбург <br />
            ул.Крауля 9а <br />
            офис 402 (4 этаж) - дирекция <br />
            офис 214 (2 этаж) - студия <br />
          </h6>
          <a href="tel:8-800-300-48-76">8-800-300-48-76</a>
          <br />
          <a href="mailto:support@idesk.su" target='_blank'>support@idesk.su</a>
          <br />
          <i className="bi bi-youtube"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default Contact;
