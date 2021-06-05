import React, { useState } from 'react'
import styled from 'styled-components'
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
    FaArrowLeft,
    FaArrowRight,
    FaPlus,
    FaPlusCircle,
    FaMinusCircle
} from "react-icons/all";

export const RoleHeading = styled.h1 `
  margin: 100px 0 50px 0;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: center;
  padding: 25px;
  font-weight: bold;
  align-items: center;
  font-size: 60px;
  font-family: 'NeutralFace';

  @media screen and (max-width: 2048px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const Plus = styled(FaPlusCircle) `
  color: #fff;
  margin: 0 25px;
  padding: 3px;
`

export const Minus = styled(FaMinusCircle) `
  color: #fff;
  width: 36px;
  height: 36px;
`

export const Icon_Left = styled.div `
  margin-top: 100px;
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 500px;
  
  
`

export const Icon_Middle = styled.div `
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 500px;

  @media screen and (max-width: 2048px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 1080px) {
    width: 125px;
    height: 125px;
  }

  @media screen and (max-width: 768px) {
    width: 125px;
    height: 125px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`

export const Icon_Right = styled.div `
  margin-top: 100px;
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 500px;
`

export const Section_1 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin:0 80px;
`

export const Section_2 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin:0 60px;
`

export const Section_3 = styled.div `
  display: inline-block;
  vertical-align: top;
`

export const Section_4 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin:0 60px;
`

export const Section_5 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin:0 80px;
`

export const RoleButton = styled.div `
  margin-top: 170px;
  padding: 10px;
  color: #fff;
  border-radius: 100px;
  height: 60px;
  width: 60px;
`

export const Role = styled.div `
  text-align: center;
  padding: 25px 0;
`


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
                        Tilted<br />
                        Games
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
                        style={ { borderTop: '10px solid #ad24a4'}}
                    >
                        <Plus />Artists
                    </RoleHeading>
                    <Role
                        style={ { borderBottom: '10px solid #ad24a4'}}
                    >
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
                        style={ { borderTop: '10px solid #e3502b' } }
                    >
                        <Plus />Writers
                    </RoleHeading>
                    <Role
                        style={ { borderBottom: '10px solid #e3502b'}}
                    >
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
                        style={ {  borderTop: '10px solid #3ac0cf'}}
                        // add onclick to expand the role
                    >
                        <Plus />Software Engineers
                    </RoleHeading>
                    <Role
                        style={ {  borderBottom: '10px solid #3ac0cf'}}
                    >
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
                        style={ { borderTop: '10px solid #30d163' } }
                    >
                        <Plus />Finance & P.R.
                    </RoleHeading>
                    <Role
                        style={ { borderBottom: '10px solid #30d163'}}
                    >
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