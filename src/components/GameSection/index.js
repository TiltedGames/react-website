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
    DownloadButtonWrapper,
    ArrowDown,
    OSIcons,
    WinIconWrapper,
    MacIconWrapper,
    LinIconWrapper,
    WinIcon,
    MacIcon,
    LinIcon,
    DownloadButton
} from '../ButtonElements';

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
                <DownloadButtonWrapper
                    onMouseEnter={ onHover }
                    onMouseLeave={ onHover }
                >
                    <DownloadButton
                        light={ hover ? 'true' : 'false' }
                        big='true'
                    >
                        Download (Alpha) <ArrowDown />
                    </DownloadButton>
                    <OSIcons
                        show={ hover ? 'true' : 'false' }
                    >
                        <WinIconWrapper><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip"><WinIcon size={48} /></a></WinIconWrapper>
                        <MacIconWrapper><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip"><MacIcon size={48} /></a></MacIconWrapper>
                        <LinIconWrapper><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip"><LinIcon size={48} /></a></LinIconWrapper>
                    </OSIcons>
                </DownloadButtonWrapper>
            </GameContent>
        </GameContainer>
    );
}

export default GameSection;