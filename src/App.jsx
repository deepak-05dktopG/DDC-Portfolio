import "./App.css";
// Router
import { Routes, Route } from "react-router-dom";
// components import
import Home from "./components/homepage/Home";
import Aboutme from "./components/aboutpage/Aboutme";
import Service from "./components/servicepage/Service";
import Contact from "./components/contactpage/Contact";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </>
  );
}

export default App;
