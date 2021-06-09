import React from 'react'
import {
    SectionText,
    PageHeading,
    PageSubheading,
    Text
} from '../components/text';
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
    Column_Heading_Left,
    Column_Heading_Right,
    Row_Header
} from '../components/layout';
import ConceptArtCarousel from '../components/concept_art';

const Game = () => {
    return (
        <PageContent id='recoup'>
            <Row_Header>
                <Column_Heading_Left>
                    <PageHeading>
                        Recoup
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Still early in development. Stay tuned for more updates!
                    </PageSubheading>
                </Column_Heading_Right>
            </Row_Header>
            <Row>
                <Text>
                    Recoup is an online, co-op experience coming to PC, Xbox & Playstation.
                    We're also hoping to support mobile devices and cross platform play.
                    Check back here for updates on the game's status!
                </Text>
            </Row>
            <Row id='recoup-concept-art'>
                <ConceptArtCarousel />
            </Row>
            <Row id='recoup-download'>
                <SectionText>Download (Alpha)</SectionText>
                <DownloadButtons>
                    <WindowsButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip'><WinIcon size={48} /></a></WindowsButton>
                    <MacButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip'><MacIcon size={48} /></a></MacButton>
                    <LinuxButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip'><LinIcon size={48} /></a></LinuxButton>
                </DownloadButtons>
            </Row>
        </PageContent>
    );
}

export default Game;