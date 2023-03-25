import React from "react";
import style from "./style.module.css";
import Aboutus from "../aboutus";
import Technology from "../technology";
import FAQ from "../FAQ";
import Helpline from "../helpline";

import {FcAbout} from "react-icons/fc";
import { useRef } from "react";
import { useRouter } from "next/router";


const navbar = () => {
    // const displaydiv = () => {
    const [display, setDisplay] = React.useState(false);
    // }
    const router = useRouter();

    
    const Home = useRef(null);
    const AboutUs = useRef(null);
    const Question = useRef(null);

    const scrollTo = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div style={{filter: display ?  'blur(5px)': 'blur(0)'}}>
            <div className={style.navbar}>
                <h1 className={style.product}>HealthVault</h1>
                <ul>
                    <li onClick={() => scrollTo(Home)} className={style.list}><a href="#Home">Home</a></li>
                    <li onClick={() => scrollTo(AboutUs)} className={style.list}><a href="#Aboutus">AboutUs</a></li>
                    <li onClick={() => scrollTo(Question)} className={style.list}><a href="#FAQ">FAQ</a></li>
                    <li onClick={()=>{display === false ? setDisplay(true): setDisplay(false)
                                    }}className={style.list}><a href="#helpline">Helpline</a></li>
                    <li onClick={() => router.push("/login")} className={style.list}><a href="#Login">Login</a></li>
                    <li onClick={() => router.push("/signup")} className={style.list}><a href="#SignUp">SignUp</a></li>
                </ul>
            </div>
                
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
                
            </div>
            {display === true ? <Helpline setDisplay={setDisplay}/> : null}
        </>
    );
};

export default navbar;