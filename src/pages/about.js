import React, { useState } from 'react'
import styled from 'styled-components'
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../components/design";
import {
    PageContent,
    Row,
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right
} from "../components/layout";
import {
    FaArrowLeft,
    FaArrowRight,
    FaPlusCircle,
    FaMinusCircle
} from "react-icons/all";

export const RoleHeading = styled.h1 `
  font-family: 'NeutralFace';
  color: #fff;
  text-align: center;
  padding: 50px 0 10px 0;
  font-weight: bold;
  align-items: center;
  
  font-size: 60px;

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
  margin-right: 20px;
`

export const Section_2 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
`

export const Section_3 = styled.div `
  display: inline-block;
  vertical-align: top;
`

export const Section_4 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
`

export const Section_5 = styled.div `
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
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
  visibility: hidden;
  height: 0;
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
                        Bringing a new and exciting experience to you
                    </PageSubheading>
                </Column_Heading_Right>
            </Row>
            <Row>
                <Column_FullWidth>
                    <BoldText>
                        Rediscover your lost past as a samurai in <u>Recoup</u>!<br /><br />
                        At the moment, all of our
                        software is open source, covered by the MIT license.
                    </BoldText>
                </Column_FullWidth>
            </Row>
            <Row>
                <Column_FullWidth
                    style={ { marginBottom: '80px',borderTop: '10px solid #fff'} }
                >
                    <RoleHeading
                        style={ { color: '#8430a6' } }
                    >
                        <Plus/>
                        Creativity
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#8430a6' } }
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
                                style={ { background: '#8430a6' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
                <Column_FullWidth
                    style={ {  marginBottom: '80px', borderTop: '10px solid #fff' }}
                >
                    <RoleHeading
                        style={ { color: '#2e30a6' } }
                        // add onclick to expand the role
                    >
                        <Plus/>
                        Software Engineers
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#2e30a6' } }
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
                                style={ { background: '#2e30a6' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
                <Column_FullWidth
                    style={ {  borderTop: '10px solid #fff' }}
                >
                    <RoleHeading
                        style={ { color: '#15690e' } }
                    >
                        <Plus/>Finance & P.R.
                    </RoleHeading>
                    <Role>
                        <Section_1>
                            <RoleButton
                                style={ { background: '#15690e' } }
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
                                style={ { background: '#15690e' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default AboutSection;