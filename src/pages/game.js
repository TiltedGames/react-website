import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading
} from "../components/design";
import {
    DownloadButtonWrapper,
    OSIcons,
    WinIconWrapper,
    MacIconWrapper,
    LinIconWrapper,
    WinIcon,
    MacIcon,
    LinIcon,
    DownloadButton, ArrowForward, ArrowRight
} from '../components/buttons';
import {
    PageContent,
    Row,
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right
} from "../components/layout";

/*

        PAGE COMPONENT

*/

const Game = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row>
                <Column_Heading_Left>
                    <PageHeading>
                        Recoup
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Recoup is still early in development. Stay tuned for more updates!
                    </PageSubheading>
                </Column_Heading_Right>
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

export default Game;