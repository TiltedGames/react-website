import React from 'react'
// import side bar components
import {
    SidebarContainer,
    SidebarIcon,
    SidebarCloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarButtonWrap,
    SidebarLink,
    SidebarGithubLink
} from "./SidebarElements";
import { FaGithubSquare } from "react-icons/fa";

// takes in isOpen/toggle parameters to open/close
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen } onClick={toggle}>
            <SidebarIcon onClick={toggle}>
                <SidebarCloseIcon />
            </SidebarIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='games'>
                        Games
                    </SidebarLink>
                    <SidebarLink to='tools'>
                        Tools
                    </SidebarLink>
                    <SidebarLink to='contact'>
                        Get in Touch
                    </SidebarLink>
                </SidebarMenu>
                <SidebarButtonWrap>
                    <SidebarGithubLink href='https://github.com/TiltedGames/'>
                        <FaGithubSquare size={50} />
                    </SidebarGithubLink>
                </SidebarButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;