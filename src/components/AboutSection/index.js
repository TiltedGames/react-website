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
    RoleButton,
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
import {
    FaArrowLeft,
    FaArrowRight
} from "react-icons/all";

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
                    <RoleHeading
                        style={ { borderBottom: '3px solid #ad24a4'}}
                    >
                        Artists
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#ad24a4' } }
                            ><FaArrowLeft size={40} /></RoleButton>
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
                            <RoleButton
                                style={ { background: '#ad24a4' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                    <RoleHeading
                        style={ { borderBottom: '3px solid #e3502b'}}
                    >
                        Writers
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#e3502b' } }
                            ><FaArrowLeft size={40} /></RoleButton>
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
                            <RoleButton
                                style={ { background: '#e3502b' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                    <RoleHeading
                        style={ { borderBottom: '3px solid #3ac0cf'}}
                    >
                        Developers (C#)
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#3ac0cf' } }
                            ><FaArrowLeft size={40} /></RoleButton>
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
                            <RoleButton
                                style={ { background: '#3ac0cf' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                    <RoleHeading
                        style={ { borderBottom: '3px solid #4d57a3'}}
                    >
                        Developers (Web)
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#4d57a3' } }
                            ><FaArrowLeft size={40} /></RoleButton>
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
                            <RoleButton
                                style={ { background: '#4d57a3' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                    <RoleHeading
                        style={ { borderBottom: '3px solid #30d163'}}
                    >
                        Finance & P.R.
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#30d163' } }
                            ><FaArrowLeft size={40} /></RoleButton>
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
                            <RoleButton
                                style={ { background: '#30d163' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default AboutSection;