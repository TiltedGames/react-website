import React, { useState } from 'react'
import NavigationBar from '../components/Navigation';        // import navigation menus
import Sidebar from '../components/Sidebar';
import AboutSection from '../components/AboutSection';

const Home = () => {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);

    const toggle = () => {
        toggleMobileMenu(!mobileMenuOpen)
    }

    return (
        <>
            <NavigationBar toggle={ toggle } />
            <AboutSection />
        </>
    );
}

export default Home;