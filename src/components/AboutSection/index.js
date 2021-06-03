import React, { useState } from 'react'
import {
    Header,
    Subheader,
    BoldText
} from "../PageDesignElements";
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

const AboutSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row>
                <Column_Header_Left>
                    <Header>
                        We are <br />Tilted<br /> Games
                    </Header>
                </Column_Header_Left>
                <Column_Header_Right>
                    <Subheader>
                        Passionate artists, creators, developers, and engineers
                    </Subheader>
                </Column_Header_Right>
            </Row>
            <Row>
                <Column_Dynamic>
                    <BoldText>
                        And we're looking to bring a new and exciting experience to you! We're working on a game named Recoup. At the moment, all of our software is open source, covered by the MIT license.
                    </BoldText>
                </Column_Dynamic>
            </Row>
        </PageContent>
    );
}

export default AboutSection;