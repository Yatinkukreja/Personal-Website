import React, { FC } from 'react';
import { useScroll } from './ScrollContext';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    const { ProjectsSectionRef, SkillsSectionRef } = useScroll();

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return(
        <div className="flex justify-between px-8 py-4 sticky top-0 bg-opacity-80 backdrop-blur-sm z-50"
        style={{fontFamily: '"Courier New", Courier, monospace', backgroundColor: "#007ACC", color: "#9CDCFE"}}>
            <div className="space-x-4 flex items-end">
                <Link to="/">
                <span className="font-semibold text-4xl" style={{color: "#C586C0"}}>Yatin Kukreja</span>
                </Link>
                <Link to="/Projects">
                    <span className="font-medium text-xl"> Projects </span>
                </Link>
                <Link to="/Skills">
                    <span className="font-medium text-xl"> Skills </span>
                </Link>
                <Link to="/Hobbies">
                    <span className="font-medium text-xl"> Hobbies </span>
                </Link>
            </div>
            <div className="flex items-end">
                <span className="font-medium text-xl"> Contact Me </span>
            </div>
        </div>
    )
};

export default Header;