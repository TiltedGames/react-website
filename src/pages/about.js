import React from 'react'
import {
    PageHeading,
    PageSubheading, SectionText,
    Text
} from '../components/text';
import {
    PageContent,
    Row,
    Column_Heading_Left,
    Column_Heading_Right,
    Row_Header
} from '../components/layout';
import MemberCarousel from '../components/members';

const About = () => {
    return (
        <PageContent id='home'>
            <Row_Header>
                <Column_Heading_Left>
                    <PageHeading>
                        Tilted<br />
                        Games
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Bringing a new and exciting experience to you
                    </PageSubheading>
                </Column_Heading_Right>
            </Row_Header>
            <Row>
                <MemberCarousel />
            </Row>
            <Row id='about'>
                <SectionText>
                    About us
                </SectionText>
                <Text>
                    Tilted Games is a small game studio based in the Los Angeles. At the moment,
                    all software produced by Tilted Games is free, open source, and developed in
                    public on Github. Right now, our focus is on a game called Recoup! Check it out here.
                    <br /><br />
                    Feeling chatty? Come say hi on <a style={ { color: '#fff' } } href="#">our Discord</a>!
                </Text>
            </Row>
        </PageContent>
    );
}

export default About;