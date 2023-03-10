import React from "react";
import style from "./style.module.css";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { motion } from "framer-motion";

const Animate = {
    offscreen: {
        x: -90,
        opacity: 0.1,
        delay: 0.5,
    },
    offscreenR: {
        x: 90,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 60,
        }
    }

}
const technology = () => {
    return (
        <>
            <div className={style.mainDiv}>
                <div className={style.info}>
                    <h1 className={style.title}><span>Features</span></h1>
                    <div className={style.features}>
                        <ul>
                        <li>
                            Secure storage and access to medical records including lab results, prescription history, and doctor's notes.
                        </li>
                        <li>
                            Sign up for both patients and healthcare providers.
                        </li>
                        <li>
                        Log in to access and manage your medical records.
                        </li>
                        <li>
                        MedCard interface and QR code integration for easy access.
                        </li>
                        <li>
                        Search medical records by date for patients, and by patient for healthcare providers.
                        </li>
                        </ul>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.technology}>
                        <div className={style.secondDiv}>
                                <motion.div
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: false }}
                                    variants={{
                                        offscreen: Animate.offscreen,

                                        onscreen: Animate.onscreen,
                                    }} >
                            <div className={style.content}>
                                    <div className={style.logo}>
                                        <IoLogoNodejs className={style.icon} />
                                        <h1 className={style.appName}>Nodejs</h1>
                                    </div>
                                <p className={style.list}> Node.js is a back-end JavaScript runtime environment.</p>

                                <div className={style.logo}>
                                    <DiMongodb className={style.icon} />
                                    <h1 className={style.appName}>MongoDB</h1>
                                </div>
                                <p className={style.list}>MongoDB is a source-available  document-oriented database program.</p>

                            </div>
                                </motion.div>
                                <motion.div
                                initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: false }}
                                    variants={{
                                        offscreen: Animate.offscreenR,

                                        onscreen: Animate.onscreen,
                                    }} >
                            <div className={style.content}>

                                    <div className={style.logo}>
                                        <AiFillGithub className={style.icon} />
                                        <h1 className={style.appName}>Github</h1>
                                    </div>
                                <p className={style.list}>GitHub is an Internet hosting service for version control.</p>
                                <div className={style.logo}>
                                    <DiReact className={style.icon} />
                                    <h1 className={style.appName}>React</h1>
                                </div>
                                <p className={style.list}>React is a open-source JavaScript library for building user interfaces.</p>
                            </div>
                                </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default technology;