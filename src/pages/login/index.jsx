import Button from "../../components/Button";
import React from "react";
import style from "./style.module.css";

// import icon
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  // const [type , setType] = React.useState("Patient");
  // async function getLogin(username, password) {
  //   // get request to backend to check if user is valid or not

  //   // set loading to true so that loader will be shown
  //   setIsLoading(true);

  //   // send the username and password to backend and check if user is valid or not
  //   await axios
  //     .get(
  //       "medvault.up.railway.app/" +
  //         username +
  //         "&password=" +
  //         password
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.isLogin === true) {
  //         // if user is valid then set isLogin to true and redirect to dashboard
  //         notifySuccessfull();
  //         setUsername("");
  //         setPassword("");
  //         props.setUserID(res.data.userID);
  //         Router.push({
  //           pathname: "/dashboard",
  //         });
  //       } else {
  //         // if user is not valid then show error message
  //         notifyUnSuccessfull("Wrong Username or Password");
  //       }
  //     })
  //     .catch((err) => {
  //       // if there is any error then show error message
  //       notifyUnSuccessfull("Something went wrong");
  //     });

  //   // set loading to false so that loader will be hidden
  // }
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
            {/* {type} */}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type = "checkbox" onChange={handlechange}/>
            <label>is Doctor</label>
            <input type = "checkbox" onChange={handlechange}/>
            <label>is Patient</label>
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
