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

function App() {

  const ProjectsSectionRef = useRef<null | HTMLDivElement>(null);
  const SkillsSectionRef = useRef<null | HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const useEffect = () => {

  };

  return (
    <BrowserRouter>
     {/* <ScrollContext.Provider value={{ ProjectsSectionRef, SkillsSectionRef}} > */}
    {/* <div className="App bg-[#1e1e1e] text-[#cccccc] min-h-screen w-full flex flex-col"> */}
      <Header />
        {/* <div className='whitespace-pre-wrap text-left font-mono ml-5 pt-5' style={{ whiteSpace: 'pre-wrap', textAlign: 'left', fontFamily: '"Courier New", Courier, monospace', marginLeft: '20px' }}>
            <TypeAnimation 
              sequence={[
                "> Hello, my name is Yatin Kukreja", 1000,
                "> Hi, I'm Yatin", 1000, 
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University", 2000,
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products.", 1000, 
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products. When I'm not coding I like to play chess, play poker, and swim.\n> ",
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={70}
            />
          </div> */}
      {/* <div> */}
      {/* </div> */}
    {/* </div> */}
     {/* </ScrollContext.Provider> */}
     <Routes>
              <Route path="/" Component={Welcome}/>
              <Route path="/Projects" Component={Projects} />
              <Route path="/Skills" Component={Skills} />
              <Route path="/Hobbies" Component={Hobbies} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
