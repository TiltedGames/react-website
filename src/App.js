import './App.css';
import React, {useState} from "react";
import NavigationBar from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import GameSection from "./components/GameSection";
import ToolsSection from "./components/ToolsSection";
import GithubSection from "./components/GithubSection";
import ContactSection from "./components/ContactSection";

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
      </>
  );

}

export default App;
