import React from "react";
import styles from "./style.module.css";

import { useRouter } from "next/router";

import NewUser from "../../components/NewUser";
import axios from "axios";

const UserInfo = (props) => {
  const [age, setAge] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [allergies, setAllergies] = React.useState("");
  const [bloodType, setBloodType] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.userId, age, dob, allergies, bloodType);
    try {
      const res = await axios.get(
        "https://med-backend-production.up.railway.app/Patient/profile",
        {
          params: {
            userID: props.userId,
            age: age,
            DOB: dob,
            allergies: allergies,
            bloodgroup: bloodType,
          },
        }
      );
      console.log(res);
      router.push("/dashboard/patient");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <NewUser
          setAge={setAge}
          setDob={setDob}
          setAllergies={setAllergies}
          setBloodType={setBloodType}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default UserInfo;
