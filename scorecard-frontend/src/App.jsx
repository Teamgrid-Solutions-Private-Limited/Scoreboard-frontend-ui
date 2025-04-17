// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Scorecard from "./home/Scorecard.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SenateScorecard from "./components/Senate.jsx";
import House from "./components/House.jsx";
import AcitivitySenate from "./components/ActivitySenate.jsx";
import ActivityHouse from "./components/ActivityHouse.jsx";
import Representative from "./components/Representative.jsx";
import Pregnancy from "./components/PregnancyHelp.jsx";
import ShowSenatorById from './senator/ShowSenatorById.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Scorecard />}/>
      <Route path="/senate" element={<SenateScorecard />}/>
      <Route path="/house" element={<House />}/>
      <Route path="/activity-senate" element={<AcitivitySenate />}/>
      <Route path="/activity-house" element={<ActivityHouse />}/>  
      <Route path="/representative" element={<Representative />}/>
      <Route path="/pregnancy-help" element={<Pregnancy />}/>
      {/* <Route path="/" element={<CustomizedGrid />}/> */}
      {/* <Route path="/" element={<TopBar />}/> */}
      <Route path="/senator/:id" element={<ShowSenatorById />}/>

    </Routes>
    </BrowserRouter>
     
          
     
    </>
  );
}

export default App;
