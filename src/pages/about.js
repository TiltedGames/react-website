import React, {useReducer, useState} from 'react'
import styled from 'styled-components'
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../components/design";
import {
    PageContent,
    Row,
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right
} from "../components/layout";
import {
    FaArrowLeft,
    FaArrowRight,
    FaPlusCircle,
    FaMinusCircle
} from "react-icons/all";

// member images
import img_brennan from '../media/img/members/brennan.jpg'
import img_ian from '../media/img/members/ian.jpg'
import img_johnny from '../media/img/members/johnny.jpg'
import img_luke from '../media/img/members/luke.jpg'
import img_noah from '../media/img/members/noah.jpeg';
import img_olivia from '../media/img/members/olivia.jpg'

/*

        ABOUT PAGE COMPONENTS

*/

const TeamHeading = styled.h1 `
  font-family: 'NeutralFace', sans-serif;
  color: #fff;
  text-align: center;
  margin: 100px 0;
  padding: 25px;
  font-weight: bold;
  align-items: center;
  border-bottom: 1px solid #fff;

  font-size: 60px;

  @media screen and (max-width: 2048px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

const OrganizationInfo = styled.h1 `
  margin-top: 100px;
`

const Plus = styled(FaPlusCircle) `
  color: #fff;
  margin: 0 50px;
  border-radius: 50%;
  padding:2px;

  box-shadow: 0 0 0 0  rgba(132, 48, 166, 0.8);
  transform: scale(1);
  animation: pulse 2s infinite;
`

const Minus = styled(FaMinusCircle) `
  color: #fff;
  margin: 0 50px;
  border-radius: 50%;

  box-shadow: 0 0 5px 0  rgba(132, 48, 166, 0.8);
  transform: scale(1);
  animation: pulse 2s infinite;
`

const slides = [
    {
        name: "Brennan",
        role: 'Artist, printer',
        email: 'brennan@tiltedgames.org',
        description: 'Creative Direction',
        image: img_brennan
    },
    {
        name: "Ian",
        role: 'Comp. Game Science, U.C. Irvine',
        email: 'relreo@tiltedgames.org',
        description: 'Developer (Unity) & Creative Direction',
        image: img_ian
    },
    {
        name: "Johnny",
        role: 'Economics, U.C. Santa Barbara',
        email: 'jbravo@tiltedgames.org',
        description: 'Accountant & Public Relations Director',
        image: img_johnny
    },
    {
        name: "Luke",
        role: 'Writer',
        email: 'blaeku@tiltedgames.org',
        description: 'Publicist & Creative Direction',
        image: img_luke
    },
    {
        name: "Noah",
        role: 'Comp. Engineering, U.C. Santa Barbara',
        email: 'noah@tiltedgames.org',
        description: 'Developer (Unity, Server, Web)',
        image: img_noah
    },
    {
        name: "Olivia",
        role: 'Artist',
        email: 'olivia@tiltedgames.org',
        description: 'Creative Direction & Map Design',
        image: img_olivia
    }
];

const SlideContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <SlideElement
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <SlideBackground
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            />
            <SlideContent
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <SlideContentInner className="slideContentInner">
                    <SlideTitle className="slideTitle">{slide.name}</SlideTitle>
                    <SlideSubtitle className="slideSubtitle">{slide.role}</SlideSubtitle>
                    <SlideDescription className="slideDescription">{slide.description}</SlideDescription>
                    <SlideDescription className="slideDescription">{slide.email}</SlideDescription>
                </SlideContentInner>
            </SlideContent>
        </SlideElement>
    );
}

const SlideElement = styled.div `
  //transform-style: preserve-3d;
  // border: solid 1px red;

  // &[data-active] {
  //   .slideContent > * {
  //     transform: none;
  //     opacity: 1;
  //   }
  // }

  grid-area: 1 / -1;

  &[data-active] {
    z-index: 2;
    pointer-events: auto;

    .slideBackground {
      opacity: 0.2;
      transform: none;
    }

    .slideContentInner {
      opacity: 1;
    }

    .slideContent {
      --x: calc(var(--px) - 0.5);
      --y: calc(var(--py) - 0.5);
      opacity: 1;

      transform: perspective(1000px);

      &:hover {
        transition: none;
        transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
        rotateX(calc(var(--y) * -45deg));
      }
    }
  }
`

const Slides = styled.div `
  display: grid;
`

const MenuButton = styled.div `
  appearance: none;
  background: transparent;
  border: none;
  color: white;
  position: absolute;
  font-size: 15rem;
  width: 15rem;
  height: 15rem;
  top: 10%;
  transition: opacity 0.3s;
  opacity: 0.7;
  z-index: 5;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    left: -75%;
  }

  &:last-child {
    right: -75%;
  }
`

const SlideContent = styled.div `
  width: 30vw;
  height: 40vw;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.7;

  display: grid;
  align-content: center;

  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(100% * var(--offset)))
  rotateY(calc(-45deg * var(--dir)));
`

const SlideContentInner = styled.div `
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0;
`

const SlideBackground = styled.div `
  position: fixed;
  top: 0;
  left: -10%;
  right: -10%;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s linear, transform 0.3s ease-in-out;
  pointer-events: none;

  transform: translateX(calc(10% * var(--dir)));
`

const SlideTitle = styled.h2 `
  font-family: NeutralFace-Bold;
  font-size: 3rem;
  text-align:left;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 0;
  color: #fff;
`

const SlideSubtitle = styled.h3 `
  font-size: 2.5rem;
  text-align:left;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 30px 0 30px 0;
  color: #fff;
`

const SlideDescription = styled.p `
  margin: 0 0 30px 0;
  text-align:left;
  font-size: 2.0rem;
  letter-spacing: 0.2ch;
  color: #fff;
`


/*

        ABOUT PAGE

*/

const About = () => {
    // on-click actions
    const [expanded_Role_1, toggleExpanded_Role_1] = useState(false);
    const [expanded_Role_2, toggleExpanded_Role_2] = useState(false);
    const [expanded_Role_3, toggleExpanded_Role_3] = useState(false);
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <PageContent>
            <Row>
                <Column_Heading_Left>
                    <PageHeading>
                        Tilted<br />
                        Games
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Bringing a new and exciting experience to you
                    </PageSubheading>
                </Column_Heading_Right>
            </Row>
            <Row>
                <Column_FullWidth>
                    <OrganizationInfo>
                        <BoldText>
                            We're working on a game called Recoup! It's coming to PC, Xbox, Playstation, and
                            will include online co-op. We are hoping to also support mobile devices and
                            cross platform play. Check out <a style={ { color: '#fff' } } href="#">the Recoup page</a> to see where we're at!
                            <br /><br />
                            At the moment, all of our
                            software is open source, covered by the MIT license.
                            <br /><br />
                            Feeling chatty? Come say hi on <a style={ { color: '#fff' } } href="#">our Discord</a>!
                        </BoldText>
                    </OrganizationInfo>
                </Column_FullWidth>
            </Row>
            <Row>
                <Column_FullWidth
                    style={ { marginBottom: '80px' } }
                >
                    <TeamHeading
                        onClick={ () => { toggleExpanded_Role_1(!expanded_Role_1) } }
                    >
                        { expanded_Role_1 ? <Minus /> : <Plus /> }
                        Meet the team
                    </TeamHeading>
                    <SlideContainer
                        style = {
                            expanded_Role_1
                                ? { height: 'auto', visibility: 'visible' }
                                : { height: '0', visibility: 'hidden'}
                        }
                    >
                        <Slides className="slides">
                            <MenuButton onClick={ () => dispatch({ type: "NEXT" } ) }>‹</MenuButton>

                            {[...slides, ...slides, ...slides].map((slide, i) => {
                                let offset = slides.length + (state.slideIndex - i);
                                return <Slide slide={ slide } offset={ offset } key={ i } />;
                            })}
                            <MenuButton onClick={ () => dispatch({ type: "PREV" } ) }>›</MenuButton>
                        </Slides>
                    </SlideContainer>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default About;