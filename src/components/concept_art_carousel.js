import React, { useReducer, useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import img_brennan from "../media/img/members/brennan.jpg";
import img_ian from "../media/img/members/ian.jpg";
import img_johnny from "../media/img/members/johnny.jpg";
import img_luke from "../media/img/members/luke.jpg";
import img_noah from "../media/img/members/noah.jpg";
import img_olivia from "../media/img/members/olivia.jpg";
import {
    Carousel_Expand,
    Carousel_L_R,
    Carousel_Exit
} from '../components/buttons'

const slides = [
    {
        name: "1",
        image: img_brennan
    },
    {
        name: "2",
        image: img_ian
    },
    {
        name: "3",
        image: img_johnny
    },
    {
        name: "4",
        image: img_luke
    },
    {
        name: "5",
        image: img_noah
    },
    {
        name: "6",
        image: img_olivia
    }
];

export const SlideContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 250px;
`

function useTilt(active) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) { return; }

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
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "NEXT") {
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

const SlideContent = styled.div `
  width: 30vw;
  height: 40vw;
  max-width: 600px;
  max-height: 750px;
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
  font-family: NeutralFace-Bold, sans-serif;
  font-size: 3rem;
  text-align:left;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 0;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`

const SlideSubtitle = styled.h3 `
  font-size: 1.5rem;
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
  font-size: 1.0rem;
  letter-spacing: 0.2ch;
  color: #fff;
`

const ConceptArtCarousel = () => {
    const [showing, toggleShow] = useState(false);
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return(<>
        <a href='#'
           style={
               !showing
                   ? { height: 'auto', visibility: 'visible',  textDecoration: 'none', color: '#000' }
                   : { height: '0', visibility: 'hidden',  textDecoration: 'none', color: '#000' }
           }
        >
            <Carousel_Expand onClick={ () => { toggleShow(true) } }>
                Concept Art
            </Carousel_Expand>
        </a>

        <SlideContainer
            style = {
                showing
                    ? { height: 'auto', visibility: 'visible' }
                    : { height: '0', visibility: 'hidden'}
            }
        >
            <Slides className="slides">
                <Carousel_L_R onClick={ () => dispatch({ type: "NEXT" } ) }>‹</Carousel_L_R>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={ slide } offset={ offset } key={ i } />;
                })}
                <Carousel_L_R onClick={ () => dispatch({ type: "PREV" } ) }>›</Carousel_L_R>
            </Slides>
        </SlideContainer>

        { showing &&
        <a href='#'
           style={
               showing
                   ? { height: 'auto', visibility: 'visible',  textDecoration: 'none', color: '#000' }
                   : { height: '0', visibility: 'hidden',  textDecoration: 'none', color: '#000' }
           }
        >
            <Carousel_Exit onClick={ () => { toggleShow(false) } }/>
        </a>
        }
        </>);
}

export default ConceptArtCarousel;