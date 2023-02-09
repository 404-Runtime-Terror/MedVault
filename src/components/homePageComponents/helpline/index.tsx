import React from "react";
import style from "./style.module.css";
import { ImCross } from "react-icons/im";

const helpline = (props) => {
    return (
        <>
            <div className={style.mainDiv}>
                <div>
                    <ImCross className={style.cross} onClick={() => { props.setDisplay(false) }} />
                </div>
                <div>
                    <div className={style.listDiv}>

                        <h1 className={style.title}>Helpline</h1>
                        <ul className={style.list}>
                            <li>NATIONAL EMERGENCY NUMBER  112</li>
                            <li>POLICE  100</li>
                            <li>FIRE  101</li>
                            <li>AMBULANCE  102</li>
                            <li>Women Helpline  1091</li>
                            <li>Women Helpline - ( Domestic Abuse )  181</li>
                            <li>Air Ambulance 9540161344 </li>
                            <li>Aids Helpline  1097</li>
                            <li>Children In Difficult Situation 1098</li>
                            <li>National Poisions Information Centre - AIIMS NEW DELHI ( 24*7 )1800116117 011-26593677, 26589391</li>
                            <li>Poision Information Centre ( CMC , Vellore )18004251213</li>
                            <li>LPG Leak Helpline1906</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default helpline;