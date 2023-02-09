import React from "react";

// import style module
import styles from "./style.module.css";

const Prescription = (props) => {
  return (
    <>
      <div className={styles.prescriptionBox}>
        <div className={styles.boxBorder}></div>
        <div className={styles.prescriptionHeader}>
          <h2 style={{ color: "var(--primary-color)" }}>Dr. Stephen Strange</h2>
          <h3 style={{ color: "var(--primary-color)" }}>
            Fri 30 Jan 2022 12:3:12
          </h3>
          <h4 className={styles.hosName}>5 Star Hospital</h4>
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
