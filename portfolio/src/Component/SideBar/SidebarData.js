import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link:"/"
    },
    {
        title:"About",
        icon: <PersonIcon />,
        link:"/about"
    },
    {
        title:"Portfolio",
        icon: <BusinessCenterIcon />,
        link:"/portfolio"
    },

]

