import React, { useState } from 'react'
import {
    DownloadText,
    PageHeading,
    PageSubheading
} from "../components/design";
import {
    DownloadButtons,
    WindowsButton,
    MacButton,
    LinuxButton,
    WinIcon,
    MacIcon,
    LinIcon
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
                <DownloadText>Download (Alpha)</DownloadText>
                <Column_FullWidth>
                        <DownloadButtons>
                            <WindowsButton><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip"><WinIcon size={48} /></a></WindowsButton>
                            <MacButton><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip"><MacIcon size={48} /></a></MacButton>
                            <LinuxButton><a href="https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip"><LinIcon size={48} /></a></LinuxButton>
                        </DownloadButtons>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default Game;