import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Card from "./components/UI/Card";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";

export default function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      console.log(url);
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-blue-100 max-w-screen h-screen max-h-screen flex flex-col  items-center  ">
      <Header />
      <div className="mt-1 2xl:mt-10 flex justify-center items-center ">
        <Card>
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home user={user} /> : <Navigate to="/login" />}
            />
            <Route
              exact
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
        </Card>
      </div>
      {/* <WebcamCapture /> */}
      <Footer />
    </div>
  );
}
