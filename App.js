import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Shared/Nav/Nav";
import Homepage from "./Pages/Homepage/Homepage";
function App() {
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
    </div>
  );
}

export default App;
