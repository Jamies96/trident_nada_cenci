import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import "./App.css";
import Converter from "./views/Converter/Coverter";
import Weather from "./views/Weather/Weather";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./views/Form/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/converter" element={<Converter/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
