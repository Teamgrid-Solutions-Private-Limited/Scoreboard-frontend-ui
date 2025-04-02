// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CssBaseline, Container,Box } from '@mui/material';
import Scorecard from "./components/Scorecard.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Scorecard />}/>
    </Routes>
    </BrowserRouter>
     
          
     
    </>
  )
}

export default App
