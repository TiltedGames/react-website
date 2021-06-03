import React, { useState } from 'react'
import {
    Header,
    Subheader
} from "../PageDesignElements";
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
    Row_EqualHeights,
    Row,
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
            <Row>
                <Column_Header_Left>
                    <Header>
                        Recoup
                    </Header>
                </Column_Header_Left>
                <Column_Header_Right>
                    <Subheader>
                        Recoup is still early in development. Stay tuned for more updates!
                    </Subheader>
                </Column_Header_Right>
            </Row>
            <Row>
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
            </Row>
        </PageContent>
    );
}

export default GameSection;