import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback}`,
      "_self"
    );
  };
  return (
    <div className={styles.container}>
      <h1 className="text-2xl font-bold">Login in With Google</h1>
      <div>
        <button className={styles.google_btn} onClick={googleAuth}>
          Login in
        </button>
        <p>
          <Link to="/signup">
            <span className={styles.google_btn}>Signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
