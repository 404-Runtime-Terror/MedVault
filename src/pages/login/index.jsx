// import {Router} from 'next/router'
import Button from "../../components/Button";
import React from "react";
import style from "./style.module.css";
import axios from "axios";

// import icon
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  function handleChange(event) {
    if (event.target.value === "doctor") {
      setType(event.target.value);
    }
    if (type === "doctor") {
      setType("patient");
    }
  }
  const [type, setType] = React.useState("patient");
  async function getLogin() {
    // get request to backend to check if user is valid or not
    // set loading to true so that loader will be shown
    // setIsLoading(true);
    console.log(username, password, type);

    if (type === "doctor") {
      // send the username and password to backend and check if user is valid or not
      try {
        const res = await axios.get(
          "https://med-backend-production.up.railway.app/doctor/login?",
          {
            params: {
              username: username,
              password: password,
            },
          }
        );
        console.log(res);
        if (res.data.isLogin) {
          props.setuserId(res.data.userID);
          await getDoctoreData();
          if (props.keys != null) {
            props.setIsDoctor(true);
            router.push("/dashboard/doctor");
          }
        }

        // if user is valid then redirect to dashboard
        // Router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const res = await axios.get(
          "https://med-backend-production.up.railway.app/patient/login?",
          {
            params: {
              username: username,
              password: password,
            },
          }
        );

        console.log(res);
        if (res.data.isLogin) {
          props.setuserId(res.data.userID);
          // console.log(props.userId);
          await getpatientData();
          props.setIsDoctor(false);
          router.push("/dashboard/patient");
        }

        // if user is valid then redirect to dashboard
        // Router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    }
  }

  const getDoctoreData = async () => {
    console.log(props.userId);
    try {
      const res = await axios.get(
        "https://med-backend-production.up.railway.app/Doctor/keys?",
        {
          params: {
            userID: props.userId,
          },
        }
      );
      // console.log(res);
      props.setKeys(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getpatientData = async () => {
    console.log(props.userId);
    try {
      const res = await axios.get(
        "https://med-backend-production.up.railway.app/Patient/patientData?",
        {
          params: {
            userID: props.userId,
          },
        }
      );

      const res2 = await axios.get(
        "https://med-backend-production.up.railway.app/Patient/profileData?",
        {
          params: {
            userID: props.userId,
          },
        }
      );
      console.log(res2);
      console.log(res);
      props.setPrescription(res.data);
      props.setUserData(res2.data);

      // props.setPrescription(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // set loading to false so that loader will be hidden
  return (
    <>
      <div className={`${style.loginWrapper} gradient`}>
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
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div
              style={{
                display: "flex",
                height: "fit-content",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="checkbox"
                value="doctor"
                onChange={handleChange}
                className={style.checkbox}
              />
              <label for="doctor">is Doctor</label>
            </div>

            <Button
              title="Login"
              style={{ width: "60%" }}
              function={(e) => {
                e.preventDefault();
                getLogin();
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
