import './style.css';
import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import About from "./pages/about";
import Game from "./pages/game";
import Tools from "./pages/tools";
import Github from "./pages/github";
import Contact from "./pages/contact";
import BugReport from "./pages/bugreport";
import classNames from "classnames";

function App() {
    // toggle mobile menu mode
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);

    // cursor
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses = classNames("cursor", {
        "cursor--clicked": clicked,
        "cursor--hidden": hidden,
        "cursor--link-hovered": linkHovered
    });

    const Cursor = () => {
        return(
        <div
            className={ cursorClasses }
            style={ { left: `${ position.x }px`, top: `${ position.y }px` } }
        />);
    }

    const scrollTo = (ref) => {
        if (ref /* + other conditions */) {
            ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return(
        <>
            <Cursor />
            <NavBar toggle={ toggleMobileMenu } />
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