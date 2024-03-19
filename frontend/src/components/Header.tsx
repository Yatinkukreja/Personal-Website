import React, { FC, useState } from 'react';
import { useScroll } from './ScrollContext';
import { Link } from 'react-router-dom';
import { Button, Drawer, IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SideBar from './SideBar';

const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
  
    return(
        <div className="flex justify-between px-8 py-4 sticky top-0 z-40 max-w-screen overflow-hidden"
        style={{fontFamily: '"Courier New", Courier, monospace', backgroundColor: "#007ACC", color: "#9CDCFE"}}>
            <div className="space-x-4 flex items-end">
                <IconButton 
                // variant="outlined"
                // color="error"
                size="medium"
                sx={{color: "#cccccc", margin: "0px", padding: "opx", background: "#007ACC", '&:hover': {background: "#569CD6"}}} onClick={() => {
                    setOpen(true);
                    console.log("pressed");
                    }}><MenuOutlinedIcon fontSize="inherit"/></IconButton>
                <Drawer open={open} onClose={() => {setOpen(false)}}>
                    <SideBar/>
                </Drawer>
                <Link to="/">
                <span className="font-semibold text-4xl" style={{color: "#C586C0"}}>Yatin Kukreja</span>
                </Link>
                {/* <Link to="/Projects">
                    <span className="font-medium text-xl"> Projects </span>
                </Link>
                <Link to="/Skills">
                    <span className="font-medium text-xl"> Skills </span>
                </Link>
                <Link to="/Hobbies">
                    <span className="font-medium text-xl"> Hobbies </span>
                </Link> */}
            </div>
            {/* <div className="flex items-end">
                <span className="font-medium text-xl"> Contact Me </span>
            </div> */}
        </div>
    )
};

export default Header;