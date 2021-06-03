import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading,
    BoldText,
    SectionHeading
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
import {
    Role,
    RoleHeading,
    NextButton,
    RoleButton_1,
    RoleButton_2,
    RoleButton_3,
    RoleButton_4,
    RoleButton_5,
    Section_1,
    Section_2,
    Section_3,
    Section_4,
    Section_5,
    Icon_Middle,
    Icon_Left,
    Icon_Right
} from "./AboutSectionElements";
import {FaArrowLeft, FaArrowRight} from "react-icons/all";

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
                        Meet the team
                    </SectionHeading>
                    <RoleHeading>
                        Artists
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton_1><FaArrowLeft size={40} /></RoleButton_1>
                        </Section_1>
                        <Section_2>
                            <Icon_Left></Icon_Left>
                        </Section_2>
                        <Section_3>
                            <Icon_Middle></Icon_Middle>
                        </Section_3>
                        <Section_4>
                            <Icon_Right></Icon_Right>
                        </Section_4>
                        <Section_5>
                            <RoleButton_1><FaArrowRight size={40} /></RoleButton_1>
                        </Section_5>
                    </Role>
                    <RoleHeading>
                        Creativity & P.R.
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton_2><FaArrowLeft size={40} /></RoleButton_2>
                        </Section_1>
                        <Section_2>
                            <Icon_Left></Icon_Left>
                        </Section_2>
                        <Section_3>
                            <Icon_Middle></Icon_Middle>
                        </Section_3>
                        <Section_4>
                            <Icon_Right></Icon_Right>
                        </Section_4>
                        <Section_5>
                            <RoleButton_2><FaArrowRight size={40} /></RoleButton_2>
                        </Section_5>
                    </Role>
                    <RoleHeading>
                        Developer (C#)
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton_3><FaArrowLeft size={40} /></RoleButton_3>
                        </Section_1>
                        <Section_2>
                            <Icon_Left></Icon_Left>
                        </Section_2>
                        <Section_3>
                            <Icon_Middle></Icon_Middle>
                        </Section_3>
                        <Section_4>
                            <Icon_Right></Icon_Right>
                        </Section_4>
                        <Section_5>
                            <RoleButton_3><FaArrowRight size={40} /></RoleButton_3>
                        </Section_5>
                    </Role>
                    <RoleHeading>
                        Developer (Web)
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton_4><FaArrowLeft size={40} /></RoleButton_4>
                        </Section_1>
                        <Section_2>
                            <Icon_Left></Icon_Left>
                        </Section_2>
                        <Section_3>
                            <Icon_Middle></Icon_Middle>
                        </Section_3>
                        <Section_4>
                            <Icon_Right></Icon_Right>
                        </Section_4>
                        <Section_5>
                            <RoleButton_4><FaArrowRight size={40} /></RoleButton_4>
                        </Section_5>
                    </Role>
                    <RoleHeading>
                        Finance
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton_5><FaArrowLeft size={40} /></RoleButton_5>
                        </Section_1>
                        <Section_2>
                            <Icon_Left></Icon_Left>
                        </Section_2>
                        <Section_3>
                            <Icon_Middle></Icon_Middle>
                        </Section_3>
                        <Section_4>
                            <Icon_Right></Icon_Right>
                        </Section_4>
                        <Section_5>
                            <RoleButton_5><FaArrowRight size={40} /></RoleButton_5>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default AboutSection;