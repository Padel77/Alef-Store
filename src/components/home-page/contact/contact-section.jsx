import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Spinner from "react-bootstrap/Spinner";
import swal from "sweetalert";
import "./contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();
  function sendEmail(e) {
    e.preventDefault();
    setSuccess(true);
    emailjs
      .sendForm(
        "service_8agfyk2",
        "template_6vgkcuy",
        e.target,
        "J0xLB3hMSaaXxdBYM"
      )
      .then((res) => {
        swal("message sent succesfuly!", "You clicked the button!", "success");
        setSuccess(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="content mt-5 mt-4" id="Contact">
        <div className="container">
          <div className="row">
            <div className="heading d-flex flex-column align-items-center mb-5">
              <div>
                <h1>{t("home.contact.title")}</h1>
              </div>
              <div className="small"></div>
            </div>
            <div className="d-flex col-md-6 mr-auto justify-content-around">
              <ul className="list-unstyled pl-md-5 mb-5">
                <li className="mb-5 text-center">
                  {t("home.contact.address1")}
                  <br />
                  {t("home.contact.address2")}
                </li>
                <div className="d-flex flex-column align-items-center contact-info">
                  <li className="d-flex text-black mb-2 text-danger">
                    <div>
                      <i className="bi bi-telephone-fill mx-2"></i>
                    </div>
                    <a className="contact-info" href="tel:01016338149">
                      {t("home.contact.calling")}
                    </a>
                  </li>
                  <li className="d-flex text-black mb-2">
                    <div>
                      <i className="bi bi-envelope mx-2"></i>
                    </div>
                    <a
                      className="contact-info"
                      href="mailto:customerservicedeem@gmail.com"
                    >
                      {t("home.contact.email")}
                    </a>
                  </li>
                  <li className="d-flex text-black mb-2">
                    <li>
                      <i className="bi bi-clock mx-2"></i>
                      {t("home.contact.time")}
                    </li>
                  </li>
                  <div className="pt-3 pb-2">
                    <p>{t("home.contact.qhelp")}</p>
                  </div>
                  <ul
                    className="d-inline-flex text-center"
                    style={{ listStyleType: "none" }}
                  >
                    <li className="">
                      <a className="mainCOlor" href="">
                        <i className="bi bi-instagram fa-2x "></i>
                      </a>
                    </li>
                    <li className="">
                      <a className="mainCOlor" href="">
                        <i className="bi bi-facebook fa-2x "></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>

            <div className="col-md-6">
              <form
                className="mx-5"
                method="post"
                id="contactForm"
                name="contactForm"
                onSubmit={sendEmail}
              >
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("home.contact.l-name")}
                      aria-label="default input example"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("home.contact.l-email")}
                      aria-label="default input example"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-4">
                    <textarea
                      className="form-control"
                      placeholder={t("home.contact.l-message")}
                      aria-label="default input example"
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value={t("home.contact.btn-submit")}
                      className="btn btn-primary rounded-1 py-2 px-4"
                    />
                    {success ? (
                      <Spinner
                        animation="border"
                        role="status"
                        className="container d-flex align-items-center justify-content-center"
                      >
                        <span className="visually-hidden ">Loading...</span>
                      </Spinner>
                    ) : (
                      <span className="submitting"></span>
                    )}
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      {/* <!-- Google map --> */}
      <div className="container-fluid p-0 m-0">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13816.878280948631!2d31.455885!3d30.030558000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d3225f12987%3A0x3188bd7f143d6618!2sFurqan%20Mosque!5e0!3m2!1sen!2sus!4v1682495273938!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br />
    </>
  );
};

export default Contact;
