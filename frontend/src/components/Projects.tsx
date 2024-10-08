import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#1e1e1e",
  color: "#cccccc",
  fontFamily: '"Courier New", Courier, monospace',
  // border: `1px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "#cccccc", marginY: "0px" }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  fontFamily: '"Courier New", Courier, monospace',
  backgroundColor: "#1e1e1e",
  color: "#cccccc",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    // margin: '0px 0',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  fontFamily: '"Courier New", Courier, monospace',
}));

const Projects: React.FC = () => {
  return (
    <div className="bg-[#1e1e1e] text-[#cccccc] w-full flex flex-col overflow-auto p-8">
      <Typography className="text-[#6A9955] pl-10">
        {"/*"}<br/>
        Some projects I've worked on over the years! Some of these were just done in my spare time, some were done at 
        hackathons. Some were done with my friends, and others were solo. 
        <br/>{"*/"}
        <br/>
      </Typography>
      <Accordion defaultExpanded>
        <AccordionSummary>
          Projects {"{"}
        </AccordionSummary>

        <AccordionDetails>

        <Typography className="text-[#6A9955] pl-10" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            {"/*"}<br />
            Completed: In Progress
            <br />{"*/"}
          </Typography>
          <Accordion defaultExpanded >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography><span className="text-[#dcdcaa] font-bold">Git commit message analysis VSCode Extension</span>{"("}
                <span className="text-[#9CDCFE]">Typescript</span>,
                <span className="text-[#9CDCFE]"> Git</span>,
                <span className="text-[#9CDCFE]"> VADER sentiment analysis</span>,
                <span className="text-[#9CDCFE]"> VSCode API</span>
                {")"}{"{"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="px-10">
                Currently working on a VSCode extension that analyzes recent git commit messages and returns a sentiment analysis of the messages, as well 
                as common words used in the messages, among other analytics.
              </Typography>
              {"}"}
            </AccordionDetails>
          </Accordion>
          <Typography className="text-[#6A9955] pl-10" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            {"/*"}<br />
            Completed: March 2024
            <br />{"*/"}
          </Typography>
          <Accordion defaultExpanded >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography><span className="text-[#dcdcaa] font-bold">This Website!</span>{"("}
                <span className="text-[#9CDCFE]">Javascript</span>,
                <span className="text-[#9CDCFE]"> Typescript</span>,
                <span className="text-[#9CDCFE]"> React</span>,
                <span className="text-[#9CDCFE]"> TailwindCSS</span>,
                <span className="text-[#9CDCFE]"> Html</span>,
                <span className="text-[#9CDCFE]"> CSS</span>,
                <span className="text-[#9CDCFE]"> Vercel</span>
                {")"}{"{"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="px-10">
                Built and deployed this website from scratch as an exercise in front end development. Constantly working to improve it and touch it up. Let me know if you have any suggestions!
              </Typography>
              {"}"}
            </AccordionDetails>
          </Accordion>

          <Typography className="text-[#6A9955] pl-10" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            {"/*"}<br />
            Collaborators: Dylan Paulson, Matt Lee, Max Weinreb
            <br />
            Completed: February 2024, Stanford TreeHacks
            <br />{"*/"}
          </Typography>
          <Accordion defaultExpanded>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography><span className="text-[#dcdcaa] font-bold">ScratchML</span>{"("}
                <span className="text-[#9CDCFE]">React</span>,
                <span className="text-[#9CDCFE]"> TypeScript</span>,
                <span className="text-[#9CDCFE]"> Python</span>,
                <span className="text-[#9CDCFE]"> Flask</span>,
                <span className="text-[#9CDCFE]"> Scikit-Learn</span>,
                <span className="text-[#9CDCFE]"> PyTorch</span>,
                <span className="text-[#9CDCFE]"> Prediction Gaurd LLM</span>
                {")"}{"{"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="px-10">
                Developed a no code, drag and drop education platform to teach students
                of any technical background the foundational concepts of Machine Learning.
                Won Best Developer Tool and 2nd place in Best Use of Intel Developer Cloud
                at Stanford TreeHacks {"'"}24.
              </Typography>
              {"}"}
            </AccordionDetails>
          </Accordion>

          <Typography className="text-[#6A9955] pl-10" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
            {"/*"}<br />
            Completed: January 2022, Purdue Hello World Hackathon
            <br />{"*/"}
          </Typography>
          <Accordion defaultExpanded>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography><span className="text-[#dcdcaa] font-bold">Campus Live Map</span>{"("}
                <span className="text-[#9CDCFE]">Java</span>,
                <span className="text-[#9CDCFE]"> Java.Swing</span>,
                <span className="text-[#9CDCFE]"> Java.Awt</span>
                {")"}{"{"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="px-10">
                Built a live updating map of campus that details club events, special speakers,
                or hiring events for students to use.
              </Typography>
              {"}"}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
        <br />
        {"}"}
      </Accordion>
    </div>
  );
}

export default Projects;
