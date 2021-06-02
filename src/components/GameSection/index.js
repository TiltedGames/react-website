import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    GameHeader,
    GameSubheader,
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
    DownloadButton, ArrowForward, ArrowRight
} from '../ButtonElements';


import {
    PageContent,
    Row_Header,
    Row_Content,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic,
    Column_Header_Left,
    Column_Header_Right
} from "../PageLayoutElements";

const GameSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row_Header>
                <Column_Header_Left>
                    <GameHeader>
                        Recoup
                    </GameHeader>
                </Column_Header_Left>
                <Column_Header_Right>
                    <GameSubheader>
                        Recoup is still early in development. Stay tuned for more updates!
                    </GameSubheader>
                </Column_Header_Right>
            </Row_Header>
            <Row_Content>
                <Column_FullWidth>
                    <DownloadButtonWrapper
                        onMouseEnter={ onHover }
                        onMouseLeave={ onHover }
                    >
                        <DownloadButton
                            light={ hover ? 'true' : 'false' }
                            big='true'
                        >
                            Download (Alpha) { hover ? <ArrowForward /> : <ArrowRight /> }
                        </DownloadButton>
                        <OSIcons
                            show={ hover ? 'true' : 'false' }
                        >
                            <WinIconWrapper><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip"><WinIcon size={48} /></a></WinIconWrapper>
                            <MacIconWrapper><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip"><MacIcon size={48} /></a></MacIconWrapper>
                            <LinIconWrapper><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip"><LinIcon size={48} /></a></LinIconWrapper>
                        </OSIcons>
                    </DownloadButtonWrapper>
                </Column_FullWidth>
            </Row_Content>
        </PageContent>
    );
}

export default GameSection;