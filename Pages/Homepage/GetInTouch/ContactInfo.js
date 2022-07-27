import React from "react";
import styles from "./GetInTouch.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo} id="touch">
      <h3 className={styles.title}>Let's get in touch</h3>
      <p className={styles.text}>
        Contact us with the following details. and fillup the form with the
        details.
      </p>
      <div className={styles.info}>
        <div className="social-information d-flex">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <p>DHAKA, BANGLADESH</p>
        </div>
        <div className="social-information d-flex">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <p>contact@glugun.com</p>
        </div>
        <div className="social-information d-flex">
          <FontAwesomeIcon icon={faMobilePhone}></FontAwesomeIcon>
          <p>+0188888888</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
