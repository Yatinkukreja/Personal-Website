import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import { ScrollContext } from './components/ScrollContext';
import { TypeAnimation } from 'react-type-animation';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const ProjectsSectionRef = useRef<null | HTMLDivElement>(null);
  const SkillsSectionRef = useRef<null | HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const theme = createTheme({
    typography: {
      fontFamily: '"Courier New", Courier, monospace',
    },
  });

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme} >
    <div className="h-screen bg-[#1e1e1e]" >
      <Header />
     <Routes>
              <Route path="/" Component={Welcome}/>
              <Route path="/Projects" Component={Projects} />
              <Route path="/Skills" Component={Skills} />
              <Route path="/Hobbies" Component={Hobbies} />
     </Routes>
     </div>
     </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
