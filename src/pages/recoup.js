import React, { useState } from 'react'
import NavigationBar from '../components/Navigation';        // import navigation menus
import Sidebar from '../components/Sidebar';
import GameSection from '../components/GameSection';

const Recoup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle }/>
            <NavigationBar currentPage='0' toggle={toggle}/>
            <GameSection />
        </>
    );
}

export default Recoup;