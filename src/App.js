import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Card from "./components/UI/Card";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";

export default function App() {
  return (
    <div className="bg-blue-100 max-w-screen h-screen max-h-screen flex flex-col  items-center  ">
      {/* <Header /> */}
      <div className="mt-10 flex justify-center items-center ">
        <Card>
          <WebcamCapture />
        </Card>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
