import React, { FC } from 'react';
import { useScroll } from './ScrollContext';

const Header: FC = () => {
    const { ProjectsSectionRef, SkillsSectionRef } = useScroll();

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return(
        <div className="flex justify-between px-8 py-4 sticky top-0 bg-opacity-80 backdrop-blur-sm"
        style={{fontFamily: '"Courier New", Courier, monospace', backgroundColor: "#007ACC", color: "#9CDCFE"}}>
            <div className="space-x-4 flex items-end">
                <span className="font-semibold text-4xl" style={{color: "#C586C0"}}>Yatin Kukreja</span>
                <span className="font-medium text-xl"> Projects </span>
                <span className="font-medium text-xl"> Skills </span>
                <span className="font-medium text-xl"> Hobbies </span>
            </div>
            <div className="flex items-end">
                <span className="font-medium text-xl"> Contact Me </span>
            </div>
        </div>
    )
};

export default Header;