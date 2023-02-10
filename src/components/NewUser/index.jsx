import React from "react";
import styles from "./style.module.css";

import Button from "../Button";

const NewUser = (props) => {
  return (
    <>
      <div className={styles.NewUserBox}>
        <div className={styles.formContainer}>
          <h1 className={styles.formHeader}>New User Form</h1>
          <ul className={styles.description}>
            <li>
              <span>Age:</span>
              <input
                type="text"
                name="Age"
                placeholder="Age"
                required
                onChange={(e) => {
                  props.setAge(e.target.value);
                }}
              />
            </li>
            <li>
              <span>Date Of Birth:</span>
              <input
                type="date"
                name="D.O.B"
                placeholder="D.O.B"
                required
                onChange={(e) => props.setDob(e.target.value)}
              />
            </li>
            <li>
              <span>Allergy:</span>
              <input
                type="text"
                name="Allergy"
                placeholder="Enter your allergies"
                required
                onChange={(e) => props.setAllergies(e.target.value)}
              />
            </li>
            <li>
              <span>
                <label>Choose your blood group:</label>
              </span>
              <div className={styles.selectContainer}>
                <select
                  name="Blood Group"
                  onChange={(e) => props.setBloodType(e.target.value)}
                >
                  <option value="A">Choose your blood group:</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <Button
          title="Submit"
          className={styles.submit}
          function={(e) => {
            props.handleSubmit(e);
          }}
        />
      </div>
    </>
  );
};

export default NewUser;
