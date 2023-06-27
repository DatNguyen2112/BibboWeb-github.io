import "./App.css";
import Home from "./trangchu/Home";
import "./index.css";
import BookDetail from "./trangchu/Bookdetail";
import Project1 from "./Project1";
import BookPDF from "./trangchu/bookPDF";
import AudioPlayers from "./trangchu/audioplayer";
import { LockIcon } from "./component/lockicon";
import Login from "./Login";
import ChooseOption from "./ChooseOption";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
function App() {
  return (
    <div className="App ">
      <Home />
      {/* <BookDetail /> */}
      {/* <Project1 /> */}
      <BookPDF />
      {/* <AudioPlayers /> */}
      {/* <Signup />

      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/choose-option" element={<ChooseOption />} />
        
      </Routes> */}
    </div>
  );
}

export default App;
