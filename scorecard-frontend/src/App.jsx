// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CssBaseline, Container,Box } from '@mui/material';
import Scorecard from "./components/Scorecard.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CustomizedGrid from "./components/CustomizedGrid.jsx";
import TopBar from "./components/TopBar.jsx"
import Senator from './components/Senator.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Scorecard />}/> */}
      {/* <Route path="/" element={<CustomizedGrid />}/> */}
      {/* <Route path="/" element={<TopBar />}/> */}
      <Route path="/" element={<Senator />}/>



    </Routes>
    </BrowserRouter>
     
          
     
    </>
  )
}

export default App
