import React, { useState } from 'react'
import NavigationBar from '../components/Navigation';        // import navigation menus
import Sidebar from '../components/Sidebar';
import GithubSection from '../components/GithubSection';

const Github = () => {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);

    const toggle = () => {
        toggleMobileMenu(!mobileMenuOpen)
    }

    return (
        <>
            <NavigationBar toggle={ toggle } />
            <GithubSection />
        </>
    );
}

export default Github;