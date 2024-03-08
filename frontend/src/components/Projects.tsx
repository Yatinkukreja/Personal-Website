import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

interface HighLightProps {
  text: string,
};

const blueVar: FC<HighLightProps> = ({text}) => {
  return(
    <span className="text-[#9CDCFE] font-bold">{text}</span>
  )
};

interface ProjectProps {
    title: string,
    date: string,
    description: React.ReactNode,
};

const Project: FC<ProjectProps> = ({title, date, description}) => {
    return(
      <Accordion
      defaultExpanded
      sx={{
        background: "#1e1e1e",
        boxShadow: "none",
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: 0,
        },
        marginY: 4,
        fontFamily: '"Courier New", Courier, monospace', // Ensure monospace font
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          minHeight: '0px',
          '&.Mui-expanded': {
            minHeight: '0px',
          },
          '.MuiAccordionSummary-content': {
            margin: '0px',
            '&.Mui-expanded': {
              margin: '0px',
            },
            color: "#d4d4d4", // VSCode text color
            fontWeight: 'bold', // Make the title stand out a bit
          },
        }}
      >
        {title} {"("}{date}{") "} {"{"}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingLeft: "1rem",
          paddingBottom: "0px !important",
          color: "#d4d4d4", // Ensure text color matches VSCode's
          fontFamily: '"Courier New", Courier, monospace', // Consistent font
          // You might add syntax highlighting here
        }}
      >
        {description} <br/>{"}"}
      </AccordionDetails>
    </Accordion>
    )
};

const Projects: FC = () => (
    <div className="bg-[#1e1e1e] text-[#cccccc] min-h-screen w-full flex flex-col"
        style={{fontFamily: '"Courier New", Courier, monospace'}}>
        <Project title={"ScratchML"} date={"February 2024"} description={
          <span>
          Inspired by MIT Scratch's drag and drop Ui, 
          my friends <span className="text-[#C586C0] font-bold">Max Weinreb</span>, <span className="text-[#C586C0] font-bold">Dylan Paulson</span>, <span className="text-[#C586C0] font-bold">Matt Lee</span> and I developed 
          a no code, drag and drop education platform to teach students 
          of any technical background the foundational concepts of Machine Learning. 
          Built with <span className="text-[#9CDCFE] font-bold">React</span> and <span className="text-[#9CDCFE] font-bold">Typescript</span> on the front end and <span className="text-[#9CDCFE] font-bold">Python Flask</span> on the backend,
          using the <span className="text-[#9CDCFE] font-bold">Scikit-Learn</span> and <span className="text-[#9CDCFE] font-bold">PyTorch</span> libraries, and a <span className="text-[#9CDCFE] font-bold">Firebase</span> database.
          </span>
          }/>
        <Project title={"Live Campus Map"} date={"January 2022"} description={"Made a live updating map of campus that details club events, special speakers, or hiring events for students to use. Used Java, taking advantage of Swing and Awt libraries."}/>
    </div>
);

export default Projects;