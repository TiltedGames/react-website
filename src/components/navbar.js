import React, { useState } from 'react';
import {
    FaPlus,
    FaGithub,
    FaDonate
} from 'react-icons/all';
import { Link } from 'react-scroll'
import styled from 'styled-components';
import roundLogo from '../media/img/round-logo.png';

export const Wrapper = styled.div `
  z-index: 1000;
  right: 50px;
  bottom: calc(50vh - 240px);
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

export const Page = styled.li `
  position: relative;
  padding: 0;
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

export const Label = styled.label `
  padding-left: 40px;
  text-align: left;
  color: #fff;
`

export const LinkWrapper = styled.div `
  border-left: 2px solid #fff;
  padding: 18px 0;
  margin: 0;
`

export const LinkWrapper_NoSpace = styled.div `
  border-left: 2px solid #fff;
  padding: 0;
  margin-top: 48px;
`

export const RoundLogo = styled.div  `
  position: absolute;
  top: 0;
  left: -22px;
  background: url(${ roundLogo }) no-repeat;
  background-size: cover;
  height: 48px;
  width: 48px;
  z-index: 1000;
`

export const GithubIcon = styled(FaGithub) `
  position: absolute;
  top: 0;
  left: -23px;
  border: 2px solid #fff;
  border-radius: 100%;
  z-index: 1000;
`

export const DonateIcon = styled(FaDonate) `
  position: absolute;
  top: 0;
  left: -23px;
  z-index: 1000;
`

export const MobileIcon = styled.div `
  display: none;

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

export const Caret = styled(FaPlus) `
  position: absolute;
  top: 26px;
  left: -40px;
  width: 10px;
  height: 10px;
`

export const SlideIn = styled.div `
  position: absolute;
  top: 54px;
  left: 300px;
  width: 300px;
  height: 2px;
  background: transparent;
  border-bottom: 2px solid #fff;
  transition: all 200ms ease-in-out;
`

export const LowSlideIn = styled.div `
  position: absolute;
  top: 64px;
  left: 300px;
  width: 300px;
  height: 2px;
  background: transparent;
  border-bottom: 2px solid #fff;
  transition: all 200ms ease-in-out;
`

export const TopSpacer = styled.div `
  height: 63px;
  width: 100%;
  background: transparent;
`

export const Spacer = styled.div `
  height: 20px;
  width: 100%;
  background: transparent;
`

const NavBar = () => {

    // show fly-in underline
    const [hovered_Home, toggle_Home] = useState(true);
    const onHover_tgIcon = () => { toggle_Home(!hovered_Home) }

    // show fly-in underline
    const [hovered_About, toggle_About] = useState(true);
    const onHover_aboutUsText = () => { toggle_About(!hovered_About) }

    // show fly-in underline, expand menu
    const [hovered_Recoup, toggle_Recoup] = useState(false);
    const onHover_recoupText = () => { toggle_Recoup(!hovered_Recoup) }

    // show fly-in underline
    const [hovered_Recoup_Concept_Art, toggle_Recoup_Concept_Art] = useState(false);
    const onHover_recoupText_Concept_Art = () => { toggle_Recoup_Concept_Art(!hovered_Recoup_Concept_Art) }

    // show fly-in underline
    const [hovered_Recoup_Download, toggle_Recoup_Download] = useState(false);
    const onHover_recoupText_Download = () => { toggle_Recoup_Download(!hovered_Recoup_Download) }

    // show fly-in underline
    const [hovered_Recoup_Bug_Report, toggle_Recoup_Bug_Report] = useState(false);
    const onHover_recoupText_Bug_Report = () => { toggle_Recoup_Bug_Report(!hovered_Recoup_Bug_Report) }

    // show fly-in underline, expand menu
    const [hovered_Server, toggle_Server] = useState(false);
    const onHover_serverText = () => { toggle_Server(!hovered_Server)}

    // show fly-in underline
    const [hovered_Server_Download, toggle_Server_Download] = useState(false);
    const onHover_serverText_Download = () => { toggle_Server_Download(!hovered_Server_Download) }

    // show fly-in underline
    const [hovered_Server_Bug_Report, toggle_Server_Bug_Report] = useState(false);
    const onHover_serverText_Bug_Report = () => { toggle_Server_Bug_Report(!hovered_Server_Bug_Report) }

    // show fly-in underline
    const [hovered_Contact, toggle_Contact] = useState(false);
    const onHover_contactText = () => { toggle_Contact(!hovered_Contact) }

    // show fly-in underline
    const [hovered_Github, toggle_Github] = useState(false);
    const onHover_githubIcon = () => { toggle_Github(!hovered_Github) }

    // show fly-in underline
    const [hovered_Donate, toggle_Donate] = useState(false);
    const onHover_donateIcon = () => { toggle_Donate(!hovered_Donate) }

    return (<>
        {/* Wrapper for the navigation bar (for position control) */}
        <Wrapper>
            {/* [UL] navigation bar implemented */}
            <Pages>
                {/* [LI] Tilted Games / Landing section */}
                <Page onMouseEnter={ onHover_tgIcon } onMouseLeave={ onHover_tgIcon }>
                    <LowSlideIn style = { hovered_Home ? { left: '300px' } : { left: '-50px'} } />

                    <Link to='home' spy={ true } smooth={ true }>
                        {/* [IMG] */}
                        <RoundLogo />
                    </Link>
                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper_NoSpace>
                        <TopSpacer />
                    </LinkWrapper_NoSpace>
                </Page>

                {/* [LI] About Us section */}
                <Page onMouseEnter={ onHover_aboutUsText } onMouseLeave={ onHover_aboutUsText }>
                    <SlideIn style = { hovered_About ? { left: '300px' } : { left: '-50px'} }/>

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        {/* [LABEL] */}
                        <Link to='about' spy={ true } smooth={ true }>
                            <Label>About Us</Label>
                        </Link>
                    </LinkWrapper>
                </Page>

                {/* [LI] Recoup section */}
                <Page onMouseEnter={ onHover_recoupText } onMouseLeave={ onHover_recoupText }>
                    <SlideIn style = { hovered_Recoup ? { left: '-50px' } : { left: '300px'} }/>

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        {/* [IMG] */}
                        <Caret />

                        {/* [LABEL] */}
                        <Link to='recoup' spy={ true } smooth={ true }>
                            <Label>Recoup</Label>
                        </Link>

                        {/* [UL] Subpage links */}
                        <SubpageLinks style = { hovered_Recoup ? { height: 'auto', visibility: 'visible' } : { } } >
                            <Link to='recoup-concept-art' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { hovered_Recoup ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Concept Art</Label>
                                </SubpageLink>
                            </Link>

                            <Link to='recoup-download' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { hovered_Recoup ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Download</Label>
                                </SubpageLink>
                            </Link>

                            <Link to='bugreport' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { hovered_Recoup ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Report a bug</Label>
                                </SubpageLink>
                            </Link>
                        </SubpageLinks>
                    </LinkWrapper>
                </Page>

                {/* [LI] game server section */}
                <Page onMouseEnter={ onHover_serverText } onMouseLeave={ onHover_serverText }>
                    <SlideIn style = { hovered_Server ? { left: '-50px' } : { left: '300px'} } />

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        {/* [IMG] */}
                        <Caret />

                        <Link to='server' spy={ true } smooth={ true }>
                            {/* [LABEL] */}
                            <Label>Game server</Label>
                        </Link>

                        {/* [UL] Subpage links */}
                        <SubpageLinks style = { hovered_Server ? { height: 'auto', visibility: 'visible' } : { } }>
                            <Link to='server-download' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { hovered_Server ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Download</Label>
                                </SubpageLink>
                            </Link>

                            <Link to='bugreport' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { hovered_Server ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Report a bug</Label>
                                </SubpageLink>
                            </Link>
                        </SubpageLinks>
                    </LinkWrapper>
                </Page>

                {/* [LI] contact section */}
                <Page onMouseEnter={ onHover_contactText } onMouseLeave={ onHover_contactText }>
                    <SlideIn style = { hovered_Contact ? { left: '-50px' } : { left: '300px'} }/>

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        <Link to='contact' spy={ true } smooth={ true }>
                            {/* [LABEL] */}
                            <Label>Contact</Label>
                        </Link>
                        <Spacer />
                    </LinkWrapper>
                </Page>

                {/* [LI] github (logo) section */}
                <Page onMouseEnter={ onHover_githubIcon } onMouseLeave={ onHover_githubIcon }>
                    <LowSlideIn style = { hovered_Github ? { left: '-50px' } : { left: '300px'} } />

                    <Link to='github' spy={ true } smooth={ true }>
                        {/* [IMG] */}
                        <GithubIcon size={48} />
                    </Link>
                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper_NoSpace>
                        <TopSpacer />
                    </LinkWrapper_NoSpace>
                </Page>

                {/* [LI] github donate (logo) section */}
                <Page onMouseEnter={ onHover_donateIcon } onMouseLeave={ onHover_donateIcon }>
                    <LowSlideIn style = { hovered_Donate ? { left: '-50px' } : { left: '300px'} } />

                    <a href='#' style={ { textDecoration: 'none', color: '#fff' } }>
                        <Link to='donate' spy={ true } smooth={ true }>
                            {/* [IMG] */}
                            <DonateIcon size={48} />
                        </Link>
                    </a>
                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper_NoSpace>
                        <TopSpacer />
                    </LinkWrapper_NoSpace>
                </Page>
            </Pages>
        </Wrapper>
    </>);
};

export default NavBar;