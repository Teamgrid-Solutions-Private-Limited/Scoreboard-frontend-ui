// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CssBaseline, Container, Box } from "@mui/material";
import Scorecard from "./components/Scorecard.jsx";
import SenateScorecard from "./components/Senate.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import House from "./components/House.jsx";
import ActivitySenate from "./components/ActivitySenate.jsx";
import ActivityHouse from "./components/ActivityHouse.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Scorecard />} />
          <Route path="/senate" element={<SenateScorecard />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/house" element={<House />} />
          <Route path="/activity-senate" element={<ActivitySenate />} />
          <Route path="/activity-house" element={<ActivityHouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
