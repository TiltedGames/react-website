import './style.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from "./pages/navbar";
import AboutSection from "./pages/about";
import GameSection from "./pages/game";
import ToolsSection from "./pages/tools";
import GithubSection from "./pages/github";
import ContactSection from "./pages/contact";
import BugReportSection from "./pages/bugreport";

// main app
function App() {

    const [mobileMenuOpen, toggleMobileMenu] = useState(false);

    const toggle = () => {
        toggleMobileMenu(!mobileMenuOpen)
    }

    return (
        <>
            <NavigationBar toggle={ toggle } />
            <AboutSection />
            <GameSection />
            <ToolsSection />
            <GithubSection />
            <ContactSection />
            <BugReportSection />
        </>
    );

}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);