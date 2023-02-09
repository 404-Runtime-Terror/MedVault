// import {Router} from 'next/router'
import Button from "../../components/Button";
import React from "react";
import style from "./style.module.css";
import axios from "axios";

// import icon
import { FcGoogle } from "react-icons/fc";
// import { Router } from "next/router";

const Login = () => {

  const [username , setUsername] = React.useState("");
  const [password , setPassword] = React.useState("");

  function handleChange(event) {
    if (event.target.value === "doctor") {
    setType(event.target.value);
    }
    if (type === "doctor") {
    setType('patient');
    }
  }
  const [type , setType] = React.useState("patient");
  async function getLogin() {
    // get request to backend to check if user is valid or not
    // set loading to true so that loader will be shown
    // setIsLoading(true);
    console.log(username , password , type)
   
    if (type === "doctor") {
    // send the username and password to backend and check if user is valid or not
    try {
      const res = await axios.get("https://med-backend-production.up.railway.app/doctor/login?", {
        params: {
          username: username,
          password: password
        }
      });
      console.log(res);
      // if user is valid then redirect to dashboard
      // Router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }else{
    try {
      const res = await axios.get("https://med-backend-production.up.railway.app/patient/login?", {
        params: {
          username: username,
          password: password
        }
      });
      console.log(res);
      // if user is valid then redirect to dashboard
      // Router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }
    }
    // set loading to false so that loader will be hidden
  return (
    <>
    {type}
      <div className={`${style.loginWrapper} gradient`}>
        /
        <div className={style.loginLeft}>
          <div className={style.quote}>
            <div>This World Shall No Pain </div>
            {/* <br /> */}
            <span>- Pain</span>
          </div>
        </div>
        <div className={style.loginRight}>
          <form>
            <h1>Login</h1>
            {/* {type} */}
            <input type="text" placeholder="Username" onChange={(e)=>{
              setUsername(e.target.value)
            }} />
            <input type="password" placeholder="Password" onChange={(e)=>{
              setPassword(e.target.value)
            }} />

            <input type="checkbox" value = "doctor" onChange={handleChange} />
            <label for="doctor">is Doctor</label>

            <Button title="Login" style={{ width: "60%" }} function={(e)=>{
              e.preventDefault();
              getLogin()}} />
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
                <span style={{ marginLeft: 10 }}>Login with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
