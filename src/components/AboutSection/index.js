import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading,
    BoldText, SectionHeading
} from "../PageDesignElements";
import {
    PageContent,
    Row_EqualHeights,
    Row,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right
} from "../PageLayoutElements";

const AboutSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row>
                <Column_Heading_Left>
                    <PageHeading>
                        We are<br />
                        Tilted<br />
                        Games
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Passionate artists, creators, developers, and engineers
                    </PageSubheading>
                </Column_Heading_Right>
            </Row>
            <Row>
                <Column_FullWidth>
                    <BoldText>
                        And we're looking to bring a new and exciting experience to you!
                        We're working on a game named Recoup. At the moment, all of our
                        software is open source, covered by the MIT license.
                    </BoldText>
                </Column_FullWidth>
            </Row>
            <Row>
                <Column_FullWidth>
                    <SectionHeading>
                        - Meet the team
                    </SectionHeading>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default AboutSection;