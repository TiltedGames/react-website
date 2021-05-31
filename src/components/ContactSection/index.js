import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    ContactContainer,
    ContactBackground,
    VideoBackground,
    ContactHeader,
    ContactContent,
    ContactP
} from "./GameSectionElements";
// import button
import {
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
    SendButton
} from '../ButtonElements';

const GameSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ContactContainer>
            <ContactBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </ContactBackground>
            <ContactContent>
                <ContactHeader>
                    Recoup
                </ContactHeader>
                <ContactP>
                    Recoup is still early in development. Stay tuned for more updates!
                </ContactP>
                <ButtonWrapper
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    <SendButton
                        light='true'
                        big='true'
                    >
                        Send { hover ? <ArrowForward /> : <ArrowRight /> }
                    </SendButton>
                </ButtonWrapper>
            </ContactContent>
        </ContactContainer>
    );
}

export default GameSection;