import React, {useEffect, useReducer, useRef, useState} from 'react'
import styled from 'styled-components'
import {
    PageHeading,
    PageSubheading, SectionText,
    Text
} from "../components/design";
import {
    PageContent,
    Row,
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right
} from "../components/layout";
import MemberCarousel from "../components/member_carousel";

/*

        ABOUT PAGE COMPONENTS

*/

const OrganizationInfo = styled.p `
  margin: 150px 0 0 0;
`

/*

        ABOUT PAGE

*/

const About = () => {
    return (
        <PageContent id='home'>
            <Row>
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
            </Row>
            <Row>
                <Column_FullWidth
                    style={ { marginBottom: '80px' } }
                >
                    <OrganizationInfo>
                        <MemberCarousel />
                    </OrganizationInfo>
                        <SectionText id='about'>
                            About us
                        </SectionText>
                        <Text>
                            Our focus is currently on a game called Recoup! It's an online, co-op experience
                            coming to PC, Xbox, Playstation. We're also hoping to support mobile devices and
                            cross platform play. Check out <a style={ { color: '#fff' } } href="#">the Recoup page</a> to see where we're at!
                            <br /><br />
                            At the moment, all of our
                            software is open source, covered by the MIT license.
                            <br /><br />
                            Feeling chatty? Come say hi on <a style={ { color: '#fff' } } href="#">our Discord</a>!
                        </Text>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default About;