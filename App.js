import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Addareview from "./Pages/Dashboard/Addareview/Addareview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Myorders from "./Pages/Dashboard/Myorders/Myorders";
import Homepage from "./Pages/Homepage/Homepage";
import Signin from "./Pages/Signin/Signin";
import ForgotPass from "./Pages/Signup/ForgotPass/ForgotPass";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Shared/Footer/Footer";
import Nav from "./Shared/Nav/Nav";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import Myprofile from "./Pages/Dashboard/Myprofile/Myprofile";
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
        {/* <Route path="/dashboard/myorders" element={"<Signin></Signin>"} /> */}
        <Route
          path="dashboard"
          element={
            <RequireAuth redirectTo="/login">
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/myorders"
          element={
            <RequireAuth redirectTo="/login">
              <Myorders></Myorders>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/addareview"
          element={
            <RequireAuth redirectTo="/login">
              <Addareview></Addareview>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/myprofile"
          element={
            <RequireAuth redirectTo="/login">
              <Myprofile></Myprofile>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
