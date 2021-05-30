import React from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    GameContainer,
    GameBackground,
    VideoBackground
} from "./GameSectionElements";

const GameSection = () => {
    return (
        <GameContainer>
            <GameBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </GameBackground>
        </GameContainer>
    )
}

export default GameSection;