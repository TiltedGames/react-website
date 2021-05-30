import React from 'react'
import {
    SidebarContainer,
    SideBarIcon,
    SidebarCloseIcon
} from "./SidebarElements";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SideBarIcon>
                <SidebarCloseIcon />
            </SideBarIcon>
        </SidebarContainer>
    );
}

export default Sidebar;