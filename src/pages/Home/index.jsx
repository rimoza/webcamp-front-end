import React from "react";
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";

const Home = (userDetails) => {
  const user = userDetails;

  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout}`, "_self");
  };

  return (
    <div>
      <WebcamCapture />
      <div>
        <p>{user.email}</p>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
