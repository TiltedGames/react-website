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
    Row_Header, Row_LimitWidth
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
                        Currently in development
                    </PageSubheading>
                </Column_Heading_Right>
            </Row_Header>
            <Row>
                <Text>
                    Recoup is a role playing game set in a Japan-esque world.
                    Feel free to download the game and see where progress is at!<br /><br />
                    At the moment, we're planning for releases on PC, Xbox, and Playstation.
                    We're also hoping to support cross platform play.
                </Text>
            </Row>
            <Row_LimitWidth id='recoup-concept-art'>
                <SectionText>Concept Art</SectionText>
                <ConceptArtCarousel />
            </Row_LimitWidth>
            <Row_LimitWidth id='recoup-download'>
                <SectionText>Download (Alpha)</SectionText>
                <DownloadButtons>
                    <WindowsButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip'><WinIcon size={48} /></a></WindowsButton>
                    <MacButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip'><MacIcon size={48} /></a></MacButton>
                    <LinuxButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip'><LinIcon size={48} /></a></LinuxButton>
                </DownloadButtons>
            </Row_LimitWidth>
        </PageContent>
    );
}

export default Game;