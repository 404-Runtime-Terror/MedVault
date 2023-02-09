import react from "react";

//import location icon
import { HiLocationMarker } from "react-icons/hi";
// import style module
import style from "./style.module.css";

const Vaccine = (props) => {
  return (
    <>
      <div className={style.vaccineBox}>
        <div className={style.vaccineHeader}>
          <h2 style={{ color: "var(--primary-color)" }}>CovinShield</h2>
          <h3 style={{ color: "var(--primary-color)" }}>
            Fri 30 Jan 2022 12:3:12
          </h3>
          <div className={style.locationLogo}>
          <HiLocationMarker className={style.hosName} />
          <h4 className={style.hosName}>5 Star Hospital,Nagpur</h4>
          </div>
        </div>
        {/* <div className={style.vaccineBody}>
            <ul className={style.medicine}>
                <li className={style.vaccineList}>Hydrocodone</li>
                <li className={style.vaccineList}>generic Zocor</li>
                <li className={style.vaccineList}>lisinopril</li>
                <li className={style.vaccineList}>generic Synthroid</li>
                <li className={style.vaccineList}>generic Norvasc</li>
            </ul>
            </div> */}
      </div>
    </>
  );
};

export default Vaccine;
