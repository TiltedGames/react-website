import './style.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./pages/navbar";
import About from "./pages/about";
import Game from "./pages/game";
import Tools from "./pages/tools";
import Github from "./pages/github";
import Contact from "./pages/contact";
import BugReport from "./pages/bugreport";

function App() {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);

    const toggle = () => { toggleMobileMenu(!mobileMenuOpen) }

    return(
        <>
            <NavBar toggle={ toggle } />
            <About />
            <Game />
            <Tools />
            <Github />
            <Contact />
            <BugReport />
        </>);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);