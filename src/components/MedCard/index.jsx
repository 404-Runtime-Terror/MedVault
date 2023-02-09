import React from "react";

import style from "./style.module.css";

// Icons
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineQrCodeScanner } from "react-icons/md";

// Components
import Button from "../Button";

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
        <h3>name : Aniruddha Gawali</h3>
        <h3>age : 18</h3>
        <h3>DOB : 1/2/23</h3>
        <h3>Allergy : none</h3>
        <h3>blood group :X+</h3>
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
  return (
    <>
      <span className={style.backgroundText}>Healt Vault</span>
      <div className={style.corners}></div>
      <div className={style.corners2}></div>
      <div className={style.logo}>
        <div className={style.profileImg}>
          <img
            src="/MedCard/qr.png"
            alt=""
            width={160}
            style={{ zIndex: 2, border: "2px solid black" }}
          />
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
          <MedCardFront setIsCardFlip={setIsCardFlip} />
        </div>

        <div
          className={style.cardWrapper}
          style={{
            display: isCardFlip ? "flex" : "none",
          }}
        >
          <MedCardBack setIsCardFlip={setIsCardFlip} />
        </div>
      </div>
    </>
  );
};

export default MedCard;