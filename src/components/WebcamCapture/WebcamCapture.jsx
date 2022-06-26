import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = () => {
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(
    (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      // console.log(imageSrc);
      setImage(imageSrc);
      downloadImage(imageSrc);
    },
    [webcamRef]
  );
  async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlob = await image.blob();
    const file = new File([imageBlob], "myFile.png", { type: imageBlob.type });
    uploadImageToDir(file);
  }

  const uploadImageToDir = (photo) => {
    console.log(JSON.stringify({ myImg: photo }));
    const formData = new FormData();
    formData.append("myImg", photo);
    fetch("http://localhost:4000/uploadForm", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <form>
      <div className="bg-black">
        {image === null ? (
          <Webcam
            audio={false}
            width={360}
            height={270}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
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
              <button className="text-white text-xl py-1 font-bold">
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
    </form>
  );
};

export default WebcamCapture;
