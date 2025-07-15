import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home.jsx";
import AboutUs from "../src/Pages/AboutUs.jsx";
import WhyUs from "../src/Pages/WhyVUS.jsx";
import TeachAtVUS from "../src/Pages/TeachAtVus.jsx";
import NewsBlog from "../src/Pages/New&Blog.jsx";
import VUSCenter from "../src/Pages/VusCenter.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vus-project" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/teachatVUS" element={<TeachAtVUS />} />
        <Route path="/new&blog" element={<NewsBlog />} />
        <Route path="/VUScenter" element={<VUSCenter />} />
      </Routes>
    </BrowserRouter>
  );
}

