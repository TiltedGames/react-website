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
  border-left: 3px solid #fff;
  padding: 18px 0;
  margin: 0;
`

export const LinkWrapper_NoSpace = styled.div `
  border-left: 3px solid #fff;
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
  margin: 0;
  z-index: 1000;
`

export const GithubIcon = styled(FaGithub) `
  position: absolute;
  top: 0;
  left: -23px;
  border: 3px solid #fff;
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
  top: 32px;
  left: -40px;
  width: 10px;
  height: 10px;
`

export const TopSpacer = styled.div `
  height: 73px;
  width: 100%;
  background: transparent;
`

export const Spacer = styled.div `
  height: 25px;
  width: 100%;
  background: transparent;
`

const NavBar = () => {

    // states for subpage expansion (toggle via hover / active page)
    const [AboutExpanded, toggleTop] = useState(true);
    const onHover_tgIcon = () => { toggleTop(!AboutExpanded) }

    const [RecoupExpanded, toggleRecoupExpanded] = useState(false);
    const onHover_recoupText = () => { toggleRecoupExpanded(!RecoupExpanded) }

    const [ServerExpanded, toggleServerExpanded] = useState(false);
    const onHover_serverText = () => { toggleServerExpanded(!ServerExpanded)}

    const [ContactExpanded, toggleContactExpanded] = useState(false);
    const onHover_contactText = () => { toggleContactExpanded(!ContactExpanded) }

    return (<>
        {/* Wrapper for the navigation bar (for position control) */}
        <Wrapper>
            {/* [UL] navigation bar implemented */}
            <Pages>
                {/* [LI] Tilted Games / Landing section */}
                <Page onMouseEnter={ onHover_tgIcon } onMouseLeave={ onHover_tgIcon }>
                    <Link to='home' spy={ true } smooth={ true }>
                        {/* [IMG] */}
                        <RoundLogo />
                    </Link>
                </Page>

                {/* [LI] About Us section */}
                <Page >
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        <TopSpacer />
                        {/* [LABEL] */}
                        <Link to='about' spy={ true } smooth={ true }>
                            <Label>About Us</Label>
                        </Link>
                    </LinkWrapper>
                </Page>

                {/* [LI] Recoup section */}
                <Page onMouseEnter={ onHover_recoupText } onMouseLeave={ onHover_recoupText }>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        {/* [IMG] */}
                        <Caret />

                        {/* [LABEL] */}
                        <Link to='recoup' spy={ true } smooth={ true }>
                            <Label>Recoup</Label>
                        </Link>


                        {/* [UL] Subpage links */}
                        <SubpageLinks style = { RecoupExpanded ? { height: 'auto', visibility: 'visible' } : { } } >
                            <Link to='recoup-concept-art' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { RecoupExpanded ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Concept Art</Label>
                                </SubpageLink>
                            </Link>

                            <Link to='recoup-download' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { RecoupExpanded ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Download</Label>
                                </SubpageLink>
                            </Link>

                            <Link to='bugreport' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { RecoupExpanded ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Report a bug</Label>
                                </SubpageLink>
                            </Link>
                        </SubpageLinks>
                    </LinkWrapper>
                </Page>

                {/* [LI] game server section */}
                <Page onMouseEnter={ onHover_serverText } onMouseLeave={ onHover_serverText }>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>
                        {/* [IMG] */}
                        <Caret />

                        <Link to='server' spy={ true } smooth={ true }>
                            {/* [LABEL] */}
                            <Label>Game server</Label>
                        </Link>

                        {/* [UL] Subpage links */}
                        <SubpageLinks style = { ServerExpanded ? { height: 'auto', visibility: 'visible' } : { } }>
                            <Link to='server-download' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { ServerExpanded ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Download</Label>
                                </SubpageLink>
                            </Link>

                            <Link to='bugreport' spy={ true } smooth={ true }>
                                {/* [LI] */}
                                <SubpageLink style = { ServerExpanded ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' } : { } }>
                                    {/* [LABEL] */}
                                    <Label>Report a bug</Label>
                                </SubpageLink>
                            </Link>
                        </SubpageLinks>
                    </LinkWrapper>
                </Page>

                {/* [LI] contact section */}
                <Page onMouseEnter={ onHover_contactText } onMouseLeave={ onHover_contactText }>
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
                <Page>
                    <Link to='github' spy={ true } smooth={ true }>
                        {/* [IMG] */}
                        <GithubIcon size={48} />
                    </Link>
                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper_NoSpace>
                        <Spacer />
                    </LinkWrapper_NoSpace>
                </Page>

                {/* [LI] github donate (logo) section */}
                <Page>
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
                        <Spacer />
                    </LinkWrapper_NoSpace>
                </Page>
            </Pages>
        </Wrapper>
    </>);
};

export default NavBar;