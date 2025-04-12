// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CssBaseline, Container,Box } from '@mui/material';
import Scorecard from "./home/Scorecard.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CustomizedGrid from "./components/CustomizedGrid.jsx";
import ShowSenatorById from './senator/ShowSenatorById.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Scorecard />}/>
      {/* <Route path="/" element={<CustomizedGrid />}/> */}
      {/* <Route path="/" element={<TopBar />}/> */}
      <Route path="/senator/:id" element={<ShowSenatorById />}/>



    </Routes>
    </BrowserRouter>
     
          
     
    </>
  )
}

export default App
