import Home from "./components/Home";
import Register from "./components/Register";
import Verify from "./components/Verify";
import Claim from "./components/Claim";
import Navbar from "./components/Navbar";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/claim" element={<Claim/>}/>
      </Routes>
    </div>
  );
}

export default App;
