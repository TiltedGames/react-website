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
    SidebarRoute
} from "./SidebarElements";
import { FaGithubSquare } from "react-icons/fa";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarIcon>
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
                    <SidebarRoute to='/'>
                        <FaGithubSquare size={50} />
                    </SidebarRoute>
                </SidebarButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;