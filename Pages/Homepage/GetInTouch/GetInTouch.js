import React from "react";
import ContactInfo from "./ContactInfo";
import styles from "./GetInTouch.module.css";
import glu from "../../../img/stick.jpg";

const GetInTouch = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form}>
          <ContactInfo></ContactInfo>
          <div className={styles.lawImage}>
            <img src={glu} alt={"glu"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
