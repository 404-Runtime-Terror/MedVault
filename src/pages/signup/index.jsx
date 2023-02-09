import React from "react";
// import style
import style from "./style.module.css";

// import framer motion
import { motion } from "framer-motion";

// import components
import Button from "../../components/Button";

// import icon
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [isDoctor, setIsDoctor] = React.useState(true);

  return (
    <>
      <div className={`${style.signupWrapper} gradient`}>
        <motion.div
          className={style.signupActive}
          animate={
            isDoctor
              ? { x: "0%", borderRadius: "12px 0 0 12px" }
              : { x: "100%", borderRadius: "0 12px 12px 0" }
          }
          transition={{ duration: 0.3, bounce: 0.3, stiffness: 500 }}
        >
          {isDoctor ? (
            <>
              <form>
                <h2 style={{ fontSize: "3.2rem" }}>Doctor</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Button
                  title="Sign Up"
                  style={{
                    width: "60%",
                    margin: "25px 0",
                    marginBottom: "12px",
                  }}
                />
                <div className="divider" style={{ width: "75%" }}></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 10,
                    width: "100%",
                    height: "fit-content",
                  }}
                >
                  <button className={`${style.other_login_icon} button`}>
                    {/* // google icon */}
                    <FcGoogle size={"30px"} />
                    <span style={{ marginLeft: 10 }}>Sign Up with Google</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <form>
                <h2 style={{ fontSize: "3.2rem" }}>Patient</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Button
                  title="Sign Up"
                  style={{
                    width: "60%",
                    margin: "25px 0",
                    marginBottom: "12px",
                  }}
                />
                <div className="divider" style={{ width: "75%" }}></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 10,
                    width: "100%",
                    height: "fit-content",
                  }}
                >
                  <button className={`${style.other_login_icon} button`}>
                    {/* // google icon */}
                    <FcGoogle size={"30px"} />
                    <span style={{ marginLeft: 10 }}>Sign Up with Google</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
        <div className={style.doctor}>
          {isDoctor ? (
            <></>
          ) : (
            <Button title="Doctor" function={() => setIsDoctor(true)} />
          )}
        </div>
        <div className={style.patient}>
          {isDoctor ? (
            <Button title="Patient" function={() => setIsDoctor(false)} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
