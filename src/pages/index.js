import React, { useState } from 'react'
import NavigationBar from '../components/Navigation';        // import navigation menus
import Sidebar from '../components/Sidebar';                 // import sidebar

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
        </>
    )
}

export default Home