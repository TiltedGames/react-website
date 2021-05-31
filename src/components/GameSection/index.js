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
} from "./GameSectionElements";
// import button
import {
    GameButtonWrapper,
    ArrowForward,
    ArrowRight,
    OSIcons,
    OSIcon,
    DownloadButton
} from '../ButtonElement';
import {
    FaApple,
    FaLinux,
    FaWindows
} from "react-icons/all";

const GameSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
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
                <GameButtonWrapper
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    <DownloadButton
                        light='true'
                        big='true'
                    >
                        Download (Alpha) { hover ? <ArrowForward /> : <ArrowRight /> }
                    </DownloadButton>
                    { hover &&
                    <OSIcons>
                        <a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip"><OSIcon><FaWindows size={50} /></OSIcon></a>
                        <a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip"><OSIcon><FaApple size={50} /></OSIcon></a>
                        <a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip"><OSIcon><FaLinux size={50} /></OSIcon></a>
                    </OSIcons>
                    }
                </GameButtonWrapper>
            </GameContent>
        </GameContainer>
    );
}

export default GameSection;