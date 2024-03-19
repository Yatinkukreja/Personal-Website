import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedIcon from '@mui/icons-material/Feed';
import EmailIcon from '@mui/icons-material/Email';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PaletteIcon from '@mui/icons-material/Palette';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const SideBar: FC = () => {
    return (
        <div className="min-h-screen bg-[#252526] text-[#cccccc]">
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    <ListItem disablePadding >
                        <Link
                            underline="none"
                            href="https://github.com/Yatinkukreja" sx={{ width: 250, color: "#cccccc" }}>
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <GitHubIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"GitHub"} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding >
                        <Link
                            underline="none"
                            href="https://www.linkedin.com/in/yatin-kukreja/" sx={{ width: 250, color: "#cccccc" }}>
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <LinkedInIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"LinkedIn"} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding >
                        <RouterLink
                            to="/Resume"
                            className="w-full">
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <FeedIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Resume"} />
                            </ListItemButton>
                        </RouterLink>
                    </ListItem>
                    <ListItem disablePadding >
                        <Link
                            underline="none"
                            href="mailto:yatin_kukreja@outlook.com?subject=Hi there! &body=Hi Yatin,%0A%0AI stumbled across your website and it was just so jaw dropping that I had to introduce myself!" sx={{ width: 250, color: "#cccccc" }}>
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <EmailIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Email me!"} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding >
                        <RouterLink
                            to="/Projects"
                            className="w-full">
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <BuildIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Projects"} />
                            </ListItemButton>
                        </RouterLink>
                    </ListItem>
                    <ListItem disablePadding >
                        <RouterLink
                            to="/Skills"
                            className="w-full">
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <LightbulbIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Skills"} />
                            </ListItemButton>
                        </RouterLink>
                    </ListItem>
                    <ListItem disablePadding >
                        <RouterLink
                            to="/Hobbies"
                            className="w-full">
                            <ListItemButton sx={{ '&:hover': { background: "#333333" } }}>
                                <ListItemIcon>
                                    <PaletteIcon sx={{color: "#cccccc"}}/>
                                </ListItemIcon>
                                <ListItemText primary={"Hobbies"} />
                            </ListItemButton>
                        </RouterLink>
                    </ListItem>
                </List>
            </Box>
        </div>
    )
};

export default SideBar;