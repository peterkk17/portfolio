import './App.css';
import Navbar from './components/navbar/index.js';
import {Route, Routes} from "react-router";

import About from './pages/about.js';
import Resume from './pages/resume.js';
import Passions from './pages/passions.js';
import Home from './pages/home.js';
import { createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Koulen',
        
      ]
    },
  });
  
  
  return (
    <>
    

    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/passions" element={<Passions/>}/>

      </Routes>
      
    </div>
    </>
  );
}

export default App;


