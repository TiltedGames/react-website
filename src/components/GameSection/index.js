import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    GameContainer,
    GameBackground,
    VideoBackground,
    GameHeader,
    GameContent,
    GameP,
    GameButtonWrapper,
    ArrowForward,
    ArrowRight
} from "./GameSectionElements";
// import button
import { Button } from '../ButtonElement';

const GameSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(hover)
    }

    return (
        <GameContainer>
            <GameBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </GameBackground>
            <GameContent>
                <GameHeader>
                    Recoup
                </GameHeader>
                <GameP>
                    Recoup is still early in development. Stay tuned for more updates!
                </GameP>
                <GameButtonWrapper>
                    <a href='https://github.com/TiltedGames/'>
                        <Button
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            light='true'
                            big='true'
                        >
                            Download (Alpha) { hover ? <ArrowForward /> : <ArrowRight /> }
                        </Button>
                    </a>
                </GameButtonWrapper>
            </GameContent>
        </GameContainer>
    );
}

export default GameSection;