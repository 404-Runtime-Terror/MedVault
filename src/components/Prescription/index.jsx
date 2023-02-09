import React from "react";

// import style module
import styles from "./style.module.css";

const Prescription = (props) => {
  return (
    <>
      <div className={styles.prescriptionBox}>
        <div className={styles.prescriptionHeader}>
          <h2 style={{ color: "var(--primary-color)" }}>
            {props.prescription.Name
              ? props.prescription.Name
              : "Name not found"}
          </h2>
          <h3 style={{ color: "var(--primary-color)" }}>
            {props.prescription.Date
              ? props.prescription.Date
              : "Date not found"}
          </h3>
          <h4 className={styles.hosName}>
            {props.prescription.Hospital
              ? props.prescription.Hospital
              : "Hospital not found"}
          </h4>
          <p>
            {props.prescription.prescription
              ? props.prescription.prescription
              : "Description not found"}
          </p>
        </div>
        {/* <div className={style.prescriptionBody}>
            <ul className={style.medicine}>
                <li className={style.medicineList}>Hydrocodone</li>
                <li className={style.medicineList}>generic Zocor</li>
                <li className={style.medicineList}>lisinopril</li>
                <li className={style.medicineList}>generic Synthroid</li>
                <li className={style.medicineList}>generic Norvasc</li>
            </ul>
            </div> */}
      </div>
    </>
  );
};

export default Prescription;
