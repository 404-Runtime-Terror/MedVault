import React from "react";
import style from "./style.module.css";
import { useRef } from "react";
import {DiMongodb} from "react-icons/di";
import {DiReact} from "react-icons/di";
import {DiNodejsSmall} from "react-icons/di";



const Footer = () => {
//    function home(){
//     document.body.scrollTo = 0;
//     document.documentElement.scrollTo = 0;
//    }
    return (
        <footer className={style.footer}>
            <div>
            <ul>
            <ul className={style.list}><a href="#Home">Home</a></ul>
                    <ul className={style.list}><a href="#AboutUs">AboutUs</a></ul>
                    <ul  className={style.list}><a href="#FAQ">FAQ</a></ul>
                </ul>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                <DiMongodb className={style.icon} /> 
                <DiReact className={style.icon} /> 
                <DiNodejsSmall className={style.icon} />
            </div>
            <div className={style.verticalLine}>
                <p></p>
            </div>
            <div className={style.logo}> </div>
        </footer>
    );
    };
export default Footer;