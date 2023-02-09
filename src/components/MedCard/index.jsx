import React from "react";

import style from "./style.module.css";

// Icons
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineQrCodeScanner } from "react-icons/md";

// Components
import Button from "../Button";
import QRcode from "../QRCode";

const MedCardFront = (props) => {
  return (
    <>
      <span className={style.backgroundText}>Healt Vault</span>
      <div className={style.corners}></div>
      <div className={style.corners2}></div>

      <div className={style.logo}>
        <div className={style.profileImg}>
          <div>
            {props.profile ? (
              <img src={props.profile} alt="profile" />
            ) : (
              <BsPersonCircle
                className={props.prf}
                color="#fff"
                size={"7.5rem"}
              />
            )}
          </div>
        </div>
        <h1>Health Vault</h1>
        <h4>secure your life data</h4>
      </div>

      <div className={style.cardContent}>
        <h3>name : {props.userData.name ? props.userData.name : ""}</h3>
        <h3>age : {props.userData.age ? props.userData.age : ""}</h3>
        <h3>
          DOB : {props.userData.dateofbirth ? props.userData.dateofbirth : ""}
        </h3>
        <h3>
          Allergy : {props.userData.allergies ? props.userData.allergies : ""}
        </h3>
        <h3>
          blood group :{" "}
          {props.userData.bloodgroup ? props.userData.bloodgroup : ""}
        </h3>
      </div>

      <div className={style.button}>
        <Button
          title={<MdOutlineQrCodeScanner />}
          zIndex={5}
          padding={"5px 5px 0 5px"}
          fontSize={"1.3rem"}
          function={() => props.setIsCardFlip(true)}
        />
      </div>
    </>
  );
};

const MedCardBack = (props) => {
  const [isEditAllowed, setIsEditAllowed] = React.useState(false);
  const [qrData, setQrData] = React.useState({
    id: props.qrdata,
    isEditAllowed: isEditAllowed,
  });
  return (
    <>
      <span className={style.backgroundText}>Healt Vault</span>
      <div className={style.corners}></div>
      <div className={style.corners2}></div>
      <div className={style.logo}>
        <div className={style.profileImg}>
          <div style={{ width: "50%", borderRadius: 10 }}>
            <QRcode value={JSON.stringify(qrData)} />
          </div>
        </div>
        <div className={style.permisstion}>
          <input type="checkbox" value={isEditAllowed} />
          <label htmlFor="">Allow to Edit</label>
        </div>
      </div>
      <div className={style.cardContent}>
        <h2>
          Good health and good sense are two of life’s greatest blessings.
        </h2>
      </div>

      <div className={style.button}>
        <Button
          title={<MdOutlineQrCodeScanner />}
          zIndex={5}
          padding={"5px 5px 0 5px"}
          fontSize={"1.3rem"}
          function={() => props.setIsCardFlip(false)}
        />
      </div>
    </>
  );
};

const MedCard = (props) => {
  const [isCardFlip, setIsCardFlip] = React.useState(false);

  const [qrdata, setQrdata] = React.useState(props.qrdata);

  return (
    <>
      <div
        style={{ transform: isCardFlip ? "rotateY(180deg)" : "none" }}
        className={style.flip_card}
      >
        <div
          className={style.cardWrapper}
          style={{ display: isCardFlip ? "none" : "flex" }}
        >
          <MedCardFront
            setIsCardFlip={setIsCardFlip}
            userData={props.userData}
          />
        </div>

        <div
          className={style.cardWrapper}
          style={{
            display: isCardFlip ? "flex" : "none",
          }}
        >
          <MedCardBack setIsCardFlip={setIsCardFlip} qrdata={qrdata} />
        </div>
      </div>
    </>
  );
};

export default MedCard;
