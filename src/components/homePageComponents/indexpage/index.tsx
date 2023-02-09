import React from "react";
import style from "./style.module.css";
import Aboutus from "../aboutus";
import Technology from "../technology";
import FAQ from "../FAQ";

import {FcAbout} from "react-icons/fc";
import { useRef } from "react";
const navbar = () => {
    const Home = useRef(null);
    const AboutUs = useRef(null);
    const Question = useRef(null);

    const scrollTo = (ref: any) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className={style.navbar}>
                <h1>HealthVault</h1>
                <ul>
                    <li onClick={() => scrollTo(Home)} className={style.list}><a href="#Home">Home</a></li>
                    <li onClick={() => scrollTo(AboutUs)} className={style.list}><a href="#Aboutus">Aboutus</a></li>
                    <li onClick={() => scrollTo(Question)} className={style.list}><a href="#FAQ">FAQ</a></li>

                </ul>
            </div>
           
            {/* <div className={style.timeline}>
            </div> */}
                

                <div  ref={Home}>
                    <Aboutus />
                    {/* <FcAbout  /> */}
                </div>
                <div ref={AboutUs}>
                    <Technology />
                </div>
                <div ref={Question}>
                    <FAQ />
                </div>
        </>
    );
};

export default navbar;