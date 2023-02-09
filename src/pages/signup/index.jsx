import React from "react";
import axios from "axios";
// import style
import style from "./style.module.css";

// import framer motion
import { motion } from "framer-motion";

// import components
import Button from "../../components/Button";

const Signup = () => {
  const [isDoctor, setIsDoctor] = React.useState(true);

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  async function getSignup() {
    // get request to backend to check if user is valid or not
    // set loading to true so that loader will be shown
    // setIsLoading(true);

    if (isDoctor) {
      // send the username and password to backend and check if user is valid or not
      try {
        const res = await axios.get(
          "https://med-backend-production.up.railway.app/Doctor/signup?",
          {
            params: {
              name: name,
              username: username,
              password: password,
              email: email,
            },
          }
        );
        console.log(res);
        // if user is valid then redirect to dashboard
        // Router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    }
  }
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
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  title="Sign Up"
                  style={{
                    width: "60%",
                    margin: "25px 0",
                    marginBottom: "12px",
                  }}
                  function={(e) => {
                    e.preventDefault();
                    getSignup();
                  }}
                />
              </form>
            </>
          ) : (
            <>
              <form>
                <h2 style={{ fontSize: "3.2rem" }}>Patient</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="email" />
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
