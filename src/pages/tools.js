import React, { useState } from 'react'
import NavigationBar from '../components/Navigation';        // import navigation menus
import Sidebar from '../components/Sidebar';
import ToolsSection from "../components/ToolsSection";

// set default to bug report
// other options: get involved, make a suggestion, ask a question
// floating option: looking to make a donation? (github sponsor link)

const Tools = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle }/>
            <NavigationBar toggle={ toggle }/>
            <ToolsSection />
        </>
    );
}

export default Tools