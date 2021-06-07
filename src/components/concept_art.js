import React from 'react'
import styled from 'styled-components';
import img_helmet_1 from '../media/img/concept_art/helmet_1.jpg';
import img_helmet_2 from '../media/img/concept_art/helmet_2.jpg';
import img_helmet_3 from '../media/img/concept_art/helmet_3.jpg';
import img_clothing from '../media/img/concept_art/clothing_design.jpg';
import img_shirakawa from '../media/img/concept_art/shirakawa.jpg';
import img_japan from '../media/img/concept_art/japan.jpg';
import { Carousel_L_R } from './buttons'
import { SectionText } from './text';

const slides = [
    {
        name: '1/6',
        image: img_helmet_1
    },
    {
        name: '2/6',
        image: img_helmet_2
    },
    {
        name: '3/6',
        image: img_helmet_3
    },
    {
        name: '4/6',
        image: img_clothing
    },
    {
        name: '5/6',
        image: img_shirakawa
    },
    {
        name: '6/6',
        image: img_japan
    }
];

const Slides = styled.div `
  display: grid;
  margin-bottom: 100px;
`

const SlideContent = styled.div `
  width: 600px;
  height: 750px;

  @media screen and (max-width: 1080px) {
    width: 300px;
    height: 375px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 250px;
  }
  
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.7;
  text-align: center;

  display: grid;
  align-content: end;

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

const SlideNumber = styled.h2 `
  font-family: NeutralFace-Bold, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin-bottom: -30px;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`

const SlideDescription = styled.p `
  margin: 0 0 30px 0;
  text-align:left;
  font-size: 1.0rem;
  letter-spacing: 0.2ch;
  color: #fff;
`

export const SlideContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  text-align: center;
`

const initialState = {
    slideIndex: 0
};

const SlideElement = styled.div `
  grid-area: 1 / -1;

  &[data-active] {
    z-index: 2;
    pointer-events: auto;

    .slideContentInner {
      opacity: 1;
    }

    .slideContent {

      --x: calc(var(--px) - 0.5);
      --y: calc(var(--py) - 0.5);
      opacity: 1;

      &:hover {
        transition: none;
        rotateX(calc(var(--y) * -45deg));
      }
    }
  }
`

const slidesReducer = (state, event) => {
    if (event.type === 'PREV') {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === 'NEXT') {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};


function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;

    return (
        <SlideElement
            className='slide'
            data-active={ active }
            style={ {
                '--offset': offset,
                '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1
            } }
        >
            <SlideContent
                className='slideContent'
                style={ { backgroundImage: `url('${slide.image}')` } }
            >
                <SlideContentInner className='slideContentInner'>
                    <SlideNumber className='slideTitle'>{slide.name}</SlideNumber>
                </SlideContentInner>
            </SlideContent>
        </SlideElement>
    );
}

const ConceptArtCarousel = () => {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return(<>
        <SectionText>Concept Art</SectionText>
        <SlideContainer>
            <Slides className='slides'>
                <Carousel_L_R onClick={ () => dispatch({ type: 'NEXT' } ) }>‹</Carousel_L_R>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={ slide } offset={ offset } key={ i } />;
                })}
                <Carousel_L_R onClick={ () => dispatch({ type: 'PREV' } ) }>›</Carousel_L_R>
            </Slides>
        </SlideContainer>
        </>);
}

export default ConceptArtCarousel;