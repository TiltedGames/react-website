import React, {useState} from 'react';
import {
    FaPlus,
    FaGithub,
    FaDonate
} from "react-icons/all";
import { Link } from 'react-scroll'
import styled from "styled-components";
import roundLogo from "../media/img/round-logo.png";

/*

        NAVBAR COMPONENTS

*/

export const RoundLogo = styled.span  `
  position: absolute;
  top: 0;
  left: -22px;
  background: url(${ roundLogo }) no-repeat;
  background-size: cover;
  height: 48px;
  width: 48px;
  margin-top: -16px;
`

export const GithubIcon = styled(FaGithub) `
  position: absolute;
  margin: 16px 0;
  top: -16px;
  left: -23px;
  height: 48px;
  width: 48px;
  border: 3px solid #fff;
  border-radius: 100px;
`

export const DonateIcon = styled(FaDonate) `
  position: absolute;
  top: -6px;
  left: -23px;
`

export const MobileIcon = styled.div `
  display:none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
  }
`

export const Wrapper = styled.div `
  z-index: 1000;
  right: 50px;
  top: 80px;
  color: #fff;
  position:fixed;
`

export const Pages = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  position: relative;
  transition: all 0.25s ease-in-out;
`

export const Label = styled.label `
  padding-left: 40px;
  text-align: left;
  color: #fff;
`

export const GithubContainer = styled.div `
  transition: all 0.25s ease-in-out;
`

export const Page = styled.li `
  position: relative;
  padding: 0;
`

export const LinkWrapper = styled.div `
  border-left: 3px solid #fff;
  padding: 25px 0;
`

export const SubpageLinks = styled.ul `
  list-style: none;
  text-align: left;
  position: relative;
  padding: 0;
  transition: all 0.25s ease-in-out;
`

export const SubpageLink = styled.li `
  position: initial;
  padding: 0 0 0 20px;
  color: #fff;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  visibility: hidden;
  height: 0;
`

export const Caret = styled(FaPlus) `
  position: absolute;
  top: 32px;
  left: -40px;
  visibility: hidden;
  width:10px;
  height:10px;
`

/*

        NAVBAR COMPONENT

*/

const NavBar = ({ myRef, scroll }) => {

    // states for subpage expansion (toggle via hover / active page)
    const [AboutExpanded, toggleAboutExpanded] = useState(true);
    const [RecoupExpanded, toggleRecoupExpanded] = useState(false);
    const [ServerExpanded, toggleServerExpanded] = useState(false);
    const [ContactExpanded, toggleContactExpanded] = useState(false);
    const onHover_0 = () => { toggleAboutExpanded(!AboutExpanded) }
    const onHover_1 = () => { toggleRecoupExpanded(!RecoupExpanded) }
    const onHover_2 = () => { toggleServerExpanded(!ServerExpanded)}
    const onHover_3 = () => { toggleContactExpanded(!ContactExpanded) }

    return (<>

        {/* Wrapper for the navigation bar (for position control) */}
        <Wrapper>

            {/* [UL] navigation bar implemented */}
            <Pages>

                {/* [LI] Tilted Games (logo) section */}
                <Page
                    onMouseEnter={ onHover_0 }
                    onMouseLeave={ onHover_0 }

                    style={
                        { zIndex: '1000', paddingBottom: '32px' }
                    }
                >

                    {/* [IMG] */}

                    <RoundLogo />


                </Page>

                {/* Empty, for spacing */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

                {/* [LI] Recoup section */}
                <Page
                    onMouseEnter={ onHover_1 }
                    onMouseLeave={ onHover_1 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>

                        {/* [IMG] */}
                        <Caret
                            style={
                                RecoupExpanded && { visibility: 'visible' }
                            }
                        />

                        {/* [LABEL] */}
                        <Link to='recoup' spy={ true } smooth={ true }>
                            <Label>Recoup</Label>
                        </Link>


                        {/* [UL] Subpage links */}
                        <SubpageLinks
                            style = {
                                RecoupExpanded
                                    ? { height: 'auto', visibility: 'visible' }
                                    : { }
                            }
                        >

                            <Link to='recoup-concept-art' spy={ true } smooth={ true }>
                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Concept Art</Label>

                            </SubpageLink>
                            </Link>

                            <Link to='recoup-download' spy={ true } smooth={ true }>
                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Download</Label>

                            </SubpageLink>
                            </Link>

                            <Link to='bugreport' spy={ true } smooth={ true }>
                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Report a bug</Label>

                            </SubpageLink>
                            </Link>

                        </SubpageLinks>
                    </LinkWrapper>

                </Page>

                {/* [LI] game server section */}
                <Page
                    onMouseEnter={ onHover_2 }
                    onMouseLeave={ onHover_2 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>

                        {/* [IMG] */}
                        <Caret
                            style={ ServerExpanded && { visibility: 'visible' } }
                        />

                        <Link to='server' spy={ true } smooth={ true }>
                        {/* [LABEL] */}
                        <Label>Game server</Label>
                        </Link>

                        {/* [UL] Subpage links */}
                        <SubpageLinks
                            style = {
                                ServerExpanded
                                    ? { height: 'auto', visibility: 'visible' }
                                    : { }
                            }
                        >

                            <Link to='server-download' spy={ true } smooth={ true }>
                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    ServerExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Download</Label>
                            </SubpageLink>
                            </Link>

                            <Link to='bugreport' spy={ true } smooth={ true }>
                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    ServerExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Report a bug</Label>

                            </SubpageLink>
                            </Link>
                        </SubpageLinks>

                    </LinkWrapper>

                </Page>

                {/* [LI] contact section */}
                <Page
                    onMouseEnter={ onHover_3 }
                    onMouseLeave={ onHover_3 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>

                        {/* [IMG] */}
                        <Caret
                            style={ ContactExpanded && { visibility: 'visible' } }
                        />

                        <Link to='contact' spy={ true } smooth={ true }>
                        {/* [LABEL] */}
                        <Label>Contact</Label>
                        </Link>

                    </LinkWrapper>

                </Page>

                {/* Empty, for spacing */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

                <GithubContainer>

                    {/* [LI] github (logo) section */}
                    <Page
                        style={ { zIndex: '1000', paddingBottom: '48px' } }
                    >

                        <Link to='github' spy={ true } smooth={ true }>
                            {/* [IMG] */}
                            <GithubIcon />
                        </Link>
                    </Page>

                    {/* Empty, for spacing */}
                    <Page>
                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>


                        </LinkWrapper>

                    </Page>

                </GithubContainer>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

                {/* [LI] github donate (logo) section */}
                <Page>
                    <a
                        href='#'
                        style={ { textDecoration: 'none', color: '#fff' } }
                    >
                        <Link to='donate' spy={ true } smooth={ true }>
                        {/* [IMG] */}
                        <DonateIcon size={48} />
                        </Link>
                    </a>

                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page
                    style = { { paddingTop: '40px' } }
                >
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>
            </Pages>
        </Wrapper>
    </>);
};

export default NavBar;