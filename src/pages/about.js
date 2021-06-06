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

/*

        CONSTANTS

*/

const Creative_Members = [
    {
        name: 'Brennan',
        member_role: 'Artist',
        email: 'brennan@tiltedgames.org',
        description: '2D and 3D artist',
        image: ''
    },
    {
        name: 'Luke',
        member_role: 'Story writer',
        email: 'blaeku@tiltedgames.org',
        description: '2D and 3D artist',
        image: ''
    },
    {
        name: 'Olivia',
        member_role: 'Artist & Map Design',
        email: 'olivia@tiltedgames.org',
        description: '2D and 3D artist',
        image: ''
    }
];

const Development_Members = [
    {
        name: 'Ian',
        member_role: 'Software Engineer',
        email: 'relreo@tiltedgames.org',
        description: 'Computer Game Science, U.C. Irvine',
        image: ''
    },
    {
        name: 'Noah Corona',
        member_role: 'Software Engineer',
        email: 'noah@tiltedgames.org',
        description: 'Computer Engineering, U.C. Santa Barbara',
        image: ''
    }
];

const Financial_Members = [
    {
        name: 'Johnny Bravo',
        member_role: 'Accountant & P.R.',
        email: 'jbravo@tiltedgames.org',
        description: 'Economics, U.C. Santa Barbara',
        image:  ''
    }
];


/*

        ABOUT PAGE COMPONENTS

*/

export const RoleHeading = styled.h1 `
  font-family: 'NeutralFace';
  color: #fff;
  text-align: center;
  padding: 50px 0;
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
  margin: 0 25px;
  padding: 3px;
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
`

/*

        ABOUT PAGE

*/

const About = () => {
    // on-click actions
    const [expanded_Role_1, toggleExpanded_Role_1] = useState(false);
    const [expanded_Role_2, toggleExpanded_Role_2] = useState(false);
    const [expanded_Role_3, toggleExpanded_Role_3] = useState(false);

    const Expand_Role_1 = () => { toggleExpanded_Role_1(true) }
    const Expand_Role_2 = () => { toggleExpanded_Role_2(true) }
    const Expand_Role_3 = () => { toggleExpanded_Role_3(true) }

    const Toggle_Role_1 = () => { toggleExpanded_Role_1(!expanded_Role_1) }
    const Toggle_Role_2 = () => { toggleExpanded_Role_2(!expanded_Role_2) }
    const Toggle_Role_3 = () => { toggleExpanded_Role_3(!expanded_Role_3) }

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
                        Rediscover your lost past as a samurai in <u>Recoup</u>!
                        <br /><br />
                        At the moment, all of our
                        software is open source, covered by the MIT license.
                    </BoldText>
                </Column_FullWidth>
            </Row>
            <Row>
                <Column_FullWidth
                    style={ { marginBottom: '80px' } }
                >
                    <RoleHeading
                        style={ { color: '#8430a6' } }
                        onMouseEnter={ Expand_Role_1 }
                        onClick={ Toggle_Role_1 }
                    >
                        { expanded_Role_1 ? <Minus /> : <Plus /> }
                        Creativity
                    </RoleHeading>
                    <Role
                        style = {
                            expanded_Role_1
                                ? { height: 'auto', visibility: 'visible' }
                                : { height: '0', visibility: 'hidden'}
                        }
                    >

                    </Role>
                </Column_FullWidth>
                <Column_FullWidth
                    style={ {  marginBottom: '80px' } }
                >
                    <RoleHeading
                        style={ { color: '#144691' } }
                        onMouseEnter={ Expand_Role_2 }
                        onClick={ Toggle_Role_2 }
                    >
                        { expanded_Role_2 ? <Minus /> : <Plus /> }
                        Development
                    </RoleHeading>
                    <Role
                        style = {
                            expanded_Role_2
                                ? { height: 'auto', visibility: 'visible' }
                                : { height: '0', visibility: 'hidden'}
                        }
                    >
                        <Section_1>
                            <RoleButton
                                style={ { background: '#144691' } }
                            >
                                <FaArrowLeft size={40} />
                            </RoleButton>
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
                                style={ { background: '#144691' } }
                            >
                                <FaArrowRight size={40} />
                            </RoleButton>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
                <Column_FullWidth>
                    <RoleHeading
                        style={ { color: '#3e9114' } }
                        onMouseEnter={ Expand_Role_3 }
                        onClick={ Toggle_Role_3 }
                    >
                        { expanded_Role_3 ? <Minus /> : <Plus /> }
                        Finance & P.R.
                    </RoleHeading>
                    <Role
                        style = {
                            expanded_Role_3
                                ? { height: 'auto', visibility: 'visible' }
                                : { height: '0', visibility: 'hidden'}
                        }
                    >
                        <Section_1>
                            <RoleButton
                                style={ { background: '#3e9114' } }
                            >
                                <FaArrowLeft size={40} />
                            </RoleButton>
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
                                style={ { background: '#3e9114' } }
                            ><FaArrowRight size={40} /></RoleButton>
                        </Section_5>
                    </Role>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default About;