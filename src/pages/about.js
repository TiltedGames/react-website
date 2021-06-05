import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading,
    BoldText,
    SectionHeading
} from "../components/design";
import {
    PageContent,
    Row_EqualHeights,
    Row,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right
} from "../components/layout";
import {
    Role,
    RoleHeading,
    RoleButton,
    Section_1,
    Section_2,
    Section_3,
    Section_4,
    Section_5,
    Icon_Middle,
    Icon_Left,
    Icon_Right
} from "../components/about";
import {
    FaArrowLeft,
    FaArrowRight,
    FaPlus
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
                        Tilted Games
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Passionate artists, creators, and engineers
                    </PageSubheading>
                </Column_Heading_Right>
            </Row>
            <Row>
                <Column_FullWidth>
                    <BoldText>
                        Our team is working hard to bring a new and exciting experience to you.
                        Rediscover your lost past as a samurai in <u>Recoup</u>!<br /><br />
                        At the moment, all of our
                        software is open source, covered by the MIT license.
                    </BoldText>
                </Column_FullWidth>
            </Row>
            <Row>
                <Column_FullWidth>
                    <RoleHeading
                        style={ { borderTop: '10px solid #ad24a4', borderBottom: '10px solid #ad24a4'}}
                    >
                        <FaPlus size={32} />    Artists
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
                        style={ { borderTop: '10px solid #e3502b', borderBottom: '10px solid #e3502b'}}
                    >
                        <FaPlus size={32} />    Writers
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
                        style={ {  borderTop: '10px solid #3ac0cf', borderBottom: '10px solid #3ac0cf'}}
                        // add onclick to expand the role
                    >
                        <FaPlus size={32} />    Software Engineers
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
                        style={ { borderTop: '10px solid #30d163', borderBottom: '10px solid #30d163'}}
                    >
                        <FaPlus size={32} />    Finance & P.R.
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