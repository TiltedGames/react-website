import React from 'react'
import {
    PageHeading,
    PageSubheadingSmall
} from '../components/text';
import {
    PageContent,
    Row,
    Column_Heading_Left,
    Column_Heading_Right,
    Row_Header, Row_LimitWidth
} from '../components/layout';
import MemberCarousel from '../components/members';

const About = () => {
    return (
        <PageContent id='home' style={ { marginTop: '80px' } }>
            <Row_Header>
                <Column_Heading_Left>
                    <PageHeading>
                        Tilted<br />
                        Games
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheadingSmall>
                        We are a small game studio based in the Los Angeles area producing
                        free, open source software. All development is done in public on Github.
                        <br /><br />
                        Come say hi on <a style={ { color: '#000' } } href="https://discord.gg/nmpJZAsq">our Discord</a>!
                    </PageSubheadingSmall>
                </Column_Heading_Right>
            </Row_Header>
            <Row_LimitWidth>
                <MemberCarousel />
            </Row_LimitWidth>
        </PageContent>
    );
}

export default About;