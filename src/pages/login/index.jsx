import Button from "../../components/Button";
import React from "react";
import style from "./style.module.css";

// import icon
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Button title="Login" style={{ width: "60%" }} />
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
