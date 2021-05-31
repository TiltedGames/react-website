import React, { useState } from 'react'
import NavigationBar from '../components/Navigation';        // import navigation menus
import Sidebar from '../components/Sidebar';
import GameSection from '../components/GameSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
            <GameSection />
        </>
    )
}

// set default to bug report
// other options: get involved, make a suggestion, ask a question
// floating option: looking to make a donation? (github sponsor link)

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle }/>
            <NavigationBar toggle={toggle}/>
            <ContactSection />
        </>
    )
}



export default Home