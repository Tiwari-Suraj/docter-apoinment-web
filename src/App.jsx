import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Myapoinment from "./pages/Myapoinment";
import Myprofile from "./pages/Myprofile";
import Apoinment from "./pages/Apoinment";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-apoinment" element={<Myapoinment />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/apoinment/:docId" element={<Apoinment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
