import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Shared/Nav/Nav";
import Homepage from "./Pages/Homepage/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Footer from "./Shared/Footer/Footer";
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
        <Route path="/signup" element={"signup />"} />
        <Route path="/login" element={"login />"} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
