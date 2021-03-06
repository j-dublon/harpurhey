import React from "react";
import StreetMap from "./StreetMap";

const Contact = () => {
  return (
    <main className="contact">
      <h1 className="contact__title">Get in touch</h1>
      <section className="contact_container">
        <section className="contact__content">
          <h2 className="contact__content__title">Address:</h2>
          <p className="contact__content__text">
            Harpurhey Neighbourhood Centre
          </p>
          <p className="contact__content__text">Carisbrook Street</p>
          <p className="contact__content__text">Harpurhey</p>
          <p className="contact__content__text">Manchester</p>
          <p className="contact__content__text__last">M9 5UX</p>
          <h2 className="contact__content__title">Phone:</h2>
          <p className="contact__content__text__last">0161 205 5143</p>
          <h2 className="contact__content__title">Email:</h2>
          <p className="contact__content__text">centre@harpurhey.org</p>
        </section>
        <StreetMap />
      </section>
    </main>
  );
};

export default Contact;
