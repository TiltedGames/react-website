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
    OSIcon,
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
                        <OSIcon><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip"><WinIcon size={50} /></a></OSIcon>
                        <OSIcon><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip"><MacIcon size={50} /></a></OSIcon>
                        <OSIcon><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip"><LinIcon size={50} /></a></OSIcon>
                    </OSIcons>
                </DownloadButtonWrapper>
            </GameContent>
        </GameContainer>
    );
}

export default GameSection;