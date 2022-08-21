import './style.css'
import { Routes, Route } from "react-router-dom"

import Sidebar from './Component/SideBar/Sidebar';
import Home from './Component/Body/Home';
import About from './Component/Body/About';
import Portfolio from './Component/Body/Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Youtube from './Component/Body/Portfolio/Youtube/Youtube';
import Photograpghy from './Component/Body/Portfolio/Photography/Photograpghy';
import Details from './Component/Body/Portfolio/Details/Details';


function App() {
  return (
    <>
    
       <Sidebar/>
       <Routes>
        {/* <Route path="/" exact element={<Home/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/youtubenav" element={<Youtube/>}/>
        <Route path="/photonav" element={<Photograpghy/>}/>
        <Route path="/detailnav" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
