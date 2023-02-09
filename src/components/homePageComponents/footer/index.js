import React from "react";
import style from "./style.module.css";
import { useRef } from "react";
import {DiMongodb} from "react-icons/di";
import {DiReact} from "react-icons/di";
import {DiNodejsSmall} from "react-icons/di";
import {scrollTo} from "src/components/homePageComponents/indexpage/index.tsx" 


const Footer = () => {
//    function home(){
//     document.body.scrollTo = 0;
//     document.documentElement.scrollTo = 0;
//    }
    return (
        <footer className={style.footer}>
            <div>
            <ul>
            <li onClick={() => scrollTo(Home)} className={style.list}><a href="#Home">Home</a></li>
                    <li onClick={() => scrollTo(AboutUs)} className={style.list}><a href="#Aboutus">Aboutus</a></li>
                    <li onClick={() => scrollTo(Question)} className={style.list}><a href="#FAQ">FAQ</a></li>

                </ul>
            </div>
            <div>
            <DiMongodb className={style.icon} /> 
            <DiReact className={style.icon} /> 
            <DiNodejsSmall className={style.icon} />
            </div>
            <div>
                MongoDB  React  Node.js
            </div>
        </footer>
    );
    };
export default Footer;