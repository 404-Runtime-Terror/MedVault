import React from "react";
import style from "./style.module.css";
import { useRef } from "react";
import { DiMongodb } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";

const Footer = () => {
  //    function home(){
  //     document.body.scrollTo = 0;
  //     document.documentElement.scrollTo = 0;
  //    }
  return (
    <footer className={style.footer}>
      <div className={style.footerLeft}>
        <div className={style.logo}>
          <img src="/logo.png" alt="img" />
        </div>

        <div className={style.Foot}>Health Vault</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <ul style={{ display: "flex" }}>
            <ul className={style.list}>
              <a href="#MongoDB">React Icons</a>
            </ul>
            <ul className={style.list}>
              <a href="#ReactJS">Motion Js</a>
            </ul>
            <ul className={style.list}>
              <a href="#NodeJS">Figma</a>
            </ul>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <DiMongodb className={style.icon} />
          <DiReact className={style.icon} />
          <DiNodejsSmall className={style.icon} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
