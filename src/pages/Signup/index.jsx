import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Signup = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth`, "_self");
  };
  return (
    <div className={styles.container}>
      <button className={styles.google_btn} onClick={googleAuth}>
        <span>Sign up with Google</span>
      </button>
      <p>
        Already Have Accoutt ?{" "}
        <Link to="/login">
          <span className={styles.google_login}>Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
