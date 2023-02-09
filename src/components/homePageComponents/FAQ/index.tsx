import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { useState, useRef } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Animate = {
    offscreen: {
        x: -90,
        opacity: 0.1,
        delay: 3,
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

const FAQ = () => {
    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <>
            <div className={style.mainDiv}>
                <h2 className={style.title}>FAQ</h2>

                <div className={style.layout}>

                    <motion.div
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false }}
                        variants={{
                            offscreen: Animate.offscreen,

                            onscreen: Animate.onscreen,
                        }} >

                        {/* first question */}
                        <div className={style.accordion}
                            onClick={() => {
                                hover === false ? setHover(true) : setHover(false)
                                setIndex(1)
                            }}>

                            <div className={style.accordion__question}>
                                {/* Question */}
                                <p>Is Healthvault free to use?</p>
                                <BsFillArrowRightCircleFill className={style.icon} style={{
                                    transform: hover === false && index === 1 ? "rotate(90deg)" : "rotate(0deg)",
                                    transition: "all 0.3s ease-in-out",
                                    marginTop: 10,
                                }} />
                            </div>


                            {hover === false && index === 1 ? <motion.div className={style.accordion__answer}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >

                                <div className={style.accordion__answer}
                                >
                                    {/* Answer */}
                                    <p>No, but it provides a platform for the user to access his/her entire medical history and also connect with best medical facilities near him.
                                    </p>

                                </div>

                            </motion.div>
                                : null}
                        </div>

                        {/* second question */}
                        <div className={style.accordion}
                            onClick={() => {
                                hover === false ? setHover(true) : setHover(false)
                                setIndex(2)
                            }}>

                            <div className={style.accordion__question}>
                                {/* Question */}
                                <p>Is the medical facilities provided credible or not?</p>
                                <BsFillArrowRightCircleFill className={style.icon} style={{
                                    transform: hover === false && index === 2 ? "rotate(90deg)" : "rotate(0deg)",
                                    transition: "all 0.3s ease-in-out",
                                    marginTop: 10,
                                }} />
                            </div>


                            {hover === false && index === 2 ? <motion.div className={style.accordion__answer}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className={style.accordion__answer}
                                >
                                    {/* Answer */}
                                    <p>Yes, all the medical professionals are certified and well- experienced individuals.</p>

                                </div>
                            </motion.div>
                                : null}
                        </div>

                        {/* third question */}
                        <div className={style.accordion}
                            onClick={() => {
                                hover === false ? setHover(true) : setHover(false)
                                setIndex(3)
                            }}>

                            <div className={style.accordion__question}>
                                {/* Question */}
                                <p>Can I get my lab reports on Healthvault?</p>
                                <BsFillArrowRightCircleFill className={style.icon} style={{
                                    transform: hover === false && index === 3 ? "rotate(90deg)" : "rotate(0deg)",
                                    transition: "all 0.3s ease-in-out",
                                    marginTop: 10,
                                }} />
                            </div>


                            {hover === false && index === 3 ? <motion.div className={style.accordion__answer}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >

                                <div className={style.accordion__answer}
                                >
                                    {/* Answer */}
                                    <p>Yes, you can view all on your health reports on  Healthvault .Also, we provide well timely report delivery.
                                    </p>

                                </div>

                            </motion.div>
                                : null}
                        </div>

                <div className={style.accordion}
                    onClick={() => {
                        hover === false ? setHover(true) : setHover(false)
                        setIndex(4)
                    }}>

                    <div className={style.accordion__question}>
                        {/* Question */}
                        <p>Can I get my  medical prescription on Healthvault?</p>
                        <BsFillArrowRightCircleFill className={style.icon} style={{
                            transform: hover === false && index === 4 ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "all 0.3s ease-in-out",
                            marginTop: 10,
                        }} />
                    </div>


                    {hover === false && index === 4 ? <motion.div className={style.accordion__answer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        >

                        <div className={style.accordion__answer}
                        >
                            {/* Answer */}
                            <p>Yes, you can access all your past and present prescriptions on Health Vault .</p>

                        </div>

                    </motion.div>
                        : null}
                        </div>
                        <div className={style.accordion}
                    onClick={() => {
                        hover === false ? setHover(true) : setHover(false)
                        setIndex(5)
                    }}>

                    <div className={style.accordion__question}>
                        {/* Question */}
                        <p>Why should I use Healthvault?</p>
                        <BsFillArrowRightCircleFill className={style.icon} style={{
                            transform: hover === false && index === 5 ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "all 0.3s ease-in-out",
                            marginTop: 10,
                        }} />
                    </div>


                    {hover === false && index === 5 ? <motion.div className={style.accordion__answer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        >

                        <div className={style.accordion__answer}
                        >
                            {/* Answer */}
                            <p>Our website provides a user-friendly experience, it is a one time investment which will provide life-long service. Also, Health Vault being a digital platform  is eco-friendly .</p>

                        </div>

                    </motion.div>
                        : null}
                        </div>
                        </motion.div>
                        </div>
            </div>
        </>
    );
};

export default FAQ;