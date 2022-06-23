import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export default function App() {
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(
    (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      // console.log(imageSrc);
      setImage(imageSrc);
    },
    [webcamRef]
  );

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(image, "image sumbit");
  };
  return (
    <div className=" max-w-screen h-screen max-h-screen flex flex-col  items-center ">
      <Header />
      <div className="border-2 border-blue-400  rounded-md mt-20 md:mt-48 ">
        {image === null ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={440}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} alt="" />
        )}
      </div>
      <div>
        {image !== null ? (
          <div className="flex justify-between items-center gap-5 md:gap-10 lg:gap-16 2xl:gap-24">
            <div className="bg-blue-700 mt-5 w-28 text-center rounded-md">
              <button
                className="text-white text-xl py-1 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  setImage(null);
                }}
              >
                Retake
              </button>
            </div>
            <div className="bg-blue-700 mt-5 w-28 text-center rounded-md">
              <button
                className="text-white text-xl py-1 font-bold"
                onClick={handleSumbit}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-blue-700 mt-5 w-28 text-center rounded-md">
            <button
              className="text-white text-xl py-1 font-bold"
              onClick={capture}
            >
              Capture
            </button>
          </div>
        )}
      </div>
      {/* <div>{image}</div> */}
      <Footer />
    </div>
  );
}
