import React, { useState } from 'react'
import {
    SectionText,
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
import img_brennan from "../media/img/members/brennan.jpg";
import img_ian from "../media/img/members/ian.jpg";
import img_johnny from "../media/img/members/johnny.jpg";
import img_luke from "../media/img/members/luke.jpg";
import img_noah from "../media/img/members/noah.jpg";
import img_olivia from "../media/img/members/olivia.jpg";
import ConceptArtCarousel from "../components/concept_art_carousel";

const slides = [
    {
        name: "Brennan",
        image: img_brennan
    },
    {
        name: "Ian",
        image: img_ian
    },
    {
        name: "Johnny",
        image: img_johnny
    },
    {
        name: "Luke",
        image: img_luke
    },
    {
        name: "Noah",
        image: img_noah
    },
    {
        name: "Olivia",
        image: img_olivia
    }
];

/*

        PAGE COMPONENT

*/

const Game = () => {
    return (
        <PageContent id='recoup'>
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
                <Column_FullWidth id='recoup-concept-art'>
                    <ConceptArtCarousel />
                </Column_FullWidth>
                <Column_FullWidth id='recoup-download'>
                    <SectionText>Download (Alpha)</SectionText>
                        <DownloadButtons>
                            <WindowsButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Windows).zip'><WinIcon size={48} /></a></WindowsButton>
                            <MacButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(macOS).zip'><MacIcon size={48} /></a></MacButton>
                            <LinuxButton><a href='https://github.com/TiltedGames/Recoup/raw/main/Build/Recoup%20(Linux).zip'><LinIcon size={48} /></a></LinuxButton>
                        </DownloadButtons>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default Game;