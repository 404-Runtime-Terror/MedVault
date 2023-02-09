import React from "react";
import Button from "../Button";

//styles
import styles from "./style.module.css";

const Prescriptionform = (props: any) => {
  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>Medical Prescription Form</h1>

        <h2 className={styles.info}>Doctor Information</h2>
        <ul className={styles.description}>
          <li>
          <li>
            <span>Date:</span><input type="date" name="date" placeholder="Date" required />
          </li>
           <span> Name:</span> <input type="text" name="doctorName" required />
          </li>
        </ul>
        {/* <hr className={styles.divider}/> */}

        <h2 className={styles.info}>Prescription</h2>
        <ul className={styles.description}>
          <li>
           <span> Drug Name: </span> <textarea id="w3review" name="w3review" rows={4} cols={50}></textarea> 
          </li>
          <li>
            <span>Dosage:</span> <input type="text" name="dosage" required />
          </li>
          <li>
            <span>Route of Administration:</span><input type="text" name="route" required />
          </li>
          <li>
           <span> Frequency: </span><input type="text" name="frequency" required />
          </li>
          <li>
            <span>Duration:</span> <input type="text" name="duration" required />
          </li>
          <li>
            <Button title="Submit" className={styles.submit}/>
          </li>
        </ul>
        </div>
            
    </>
  );
};
export default Prescriptionform;
