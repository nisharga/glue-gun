import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Shared/Nav/Nav";
import Homepage from "./Pages/Homepage/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Footer from "./Shared/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPass from "./Pages/Signup/ForgotPass/ForgotPass";
import Signin from "./Pages/Signin/Signin";
function App() {
  // / font awesome global declear
  const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);
  library.add(...iconList);
  // font awesome global declear
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/blog" element={"<BLog />"} />
        <Route path="/about" element={"About />"} />
        <Route path="/checkout" element={"checkout />"} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/forgotpass" element={<ForgotPass></ForgotPass>} />
        <Route path="/login" element={<Signin></Signin>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
