// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CssBaseline, Container,Box } from '@mui/material';
import Scorecard from "./components/Scorecard.jsx";
import SenateScorecard from './components/Senate.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Scorecard />}/>
      <Route path="/senate" element={<SenateScorecard />}/>
      <Route path="/footer" element={<Footer />}/>
    </Routes>
    </BrowserRouter>
     
          
     
    </>
  )
}

export default App
