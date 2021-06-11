import React,
{
    useState,
    useEffect,
    useRef
} from 'react'
import styled from 'styled-components';
import img_helmet_1 from '../media/img/concept_art/helmet_1.jpg'
import img_helmet_2 from '../media/img/concept_art/helmet_2.jpg'
import img_helmet_3 from '../media/img/concept_art/helmet_3.jpg'
import img_clothing from '../media/img/concept_art/clothing_design.jpg'
import img_shirakawa from '../media/img/concept_art/shirakawa.jpg'
import img_japan from '../media/img/concept_art/japan.jpg'
import { Carousel_L_R } from './buttons'

const slides = [
    {
        name: '1/6',
        image: img_japan
    },
    {
        name: '2/6',
        image: img_shirakawa
    },
    {
        name: '3/6',
        image: img_helmet_1
    },
    {
        name: '4/6',
        image: img_helmet_2
    },
    {
        name: '5/6',
        image: img_helmet_3
    },
    {
        name: '6/6',
        image: img_clothing
    }
];

export const SlideContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const initialState = {
    slideIndex: 0
};

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
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.7;

  display: grid;
  align-content: center;

  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(80% * var(--offset)))
  rotateY(calc(-45deg * var(--dir)));

  width: 750px;
  height: 1000px;

  @media screen and (max-height: 1440px) {
    width: 600px;
    height: 800px;
  }

  @media screen and (max-height: 1080px) {
    width: 400px;
    height: 533px;
  }

  @media screen and (max-height: 480px) {
    width: 250px;
    height: 333px;
  }
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

const SlideNumber = styled.h2 `
  font-family: NeutralFace-Bold, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin-bottom: 0;
  background: #222;
  padding: 10px 20px 10px 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  
  @media screen and (max-height: 800px) {
    font-size: 1rem;
    padding: 5px 10px 5px 15px;
  }
`

function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}

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

            el.style.setProperty('--px', px);
            el.style.setProperty('--py', py);
        };

        el.addEventListener('mousemove', handleMouseMove);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
        };
    }, [active]);

    return ref;
}

const slidesReducer = (state, event) => {
    if (event.type === 'PREV') {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    else if (event.type === 'NEXT') {
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

    const refScroll = useRef()
    const isVisible = useOnScreen(ref)

    return (
        <SlideElement
            ref={ ref }
            className='slide'
            data-active={ active }
            style={ {
                '--offset': offset,
                '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1
            } }
        >
            <SlideBackground
                className='slideBackground'
                ref={ refScroll }
                style={ { backgroundImage: `url('${slide.image}')`, visibility: (isVisible) ? `visible` : `hidden` } }
            />
            <SlideContent
                className='slideContent'
                style={ { backgroundImage: `url('${slide.image}')` } }
            >
                <SlideContentInner className='slideContentInner'>
                </SlideContentInner>
                <SlideNumber className='slideTitle'>{slide.name}</SlideNumber>
            </SlideContent>
        </SlideElement>
    );
}

const ConceptArtCarousel = () => {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return(<>
        <SlideContainer>
            <Slides className="slides">
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