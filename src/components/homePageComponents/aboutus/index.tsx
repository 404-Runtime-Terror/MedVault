import React from "react";
import style from "./style.module.css";
import {motion} from "framer-motion";
const Animate = {
    offscreen: {
        x: -10,
        opacity: 0.1,
    },
    offscreenLogo :{
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
const aboutus = () => {
    return (
        <>
            <div className={style.mainDiv}>
                <div className={style.about}>
                    <div className={style.info}>
                        <motion.div
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false }}
                        variants={{
                            offscreen: Animate.offscreen,

                            onscreen: Animate.onscreen,
                        }} >
                        <h1 className={style.title}>Secure Medical Records Management at Your Fingertips</h1>
                        <div className={style.description}>
                            <p className={style.text}>Health Vault is a secure, cloud-based medical records management
                             system that allows you to store, access, and share your medical records with your healthcare
                              providers. Health Vault is HIPAA compliant and is designed to help you manage your medical
                               records in a secure and convenient way.</p>
                        </div>
                        </motion.div>
                    </div>
                    <div className={style.info}>
                        <motion.div
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false }}
                        variants={{
                            offscreen: Animate.offscreenLogo,

                            onscreen: Animate.onscreen,
                        }}>

                        <div className={style.logo}></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default aboutus;