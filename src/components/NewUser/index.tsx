import React from "react";
import styles from "./style.module.css";

import Button from "../Button";

const NewUser = (props: any) => {
  return (
    <>
      <div className={styles.NewUserBox}>
        <div className={styles.formContainer}>
          <h1 className={styles.formHeader}>New User Form</h1>
          <ul className={styles.description}>
            <li>
              <span> Name:</span>{" "}
              <input
                type="text"
                placeholder="Enter your name"
                name="Patient Name"
                required
              />
            </li>
            <li>
              <span>Age:</span>
              <input  type="text" name="Age" placeholder="Age" required />
            </li>
            <li>
              <span>Date Of Birth:</span>
              <input type="date" name="D.O.B" placeholder="D.O.B" required />
            </li>
            <li>
              <span>Allergy:</span>
              <input
                type="text"
                name="Allergy"
                placeholder="Enter your allergies"
                required
              />
            </li>
            <li>
              <span>
                <label>Choose your blood group:</label>
              </span>
              <div className={styles.selectContainer}>
              <select name="Blood Group">
                <option value="A">Choose your blood group:</option>
                <option value="A">A+</option>
                <option value="B">B+</option>
                <option value="AB">AB+</option>
                <option value="O">O+</option>
                <option value="A">A-</option>
                <option value="B">B-</option>
                <option value="AB">AB-</option>
                <option value="O">O-</option>
              </select>
              </div>
            </li>
          </ul>
        </div>
        <Button title="Submit" className={styles.submit}/>
      </div>
    </>
  );
};

export default NewUser;
