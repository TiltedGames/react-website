import React, {useState} from 'react';
import {
    FaPlus,
    FaGithub,
    FaDonate
} from "react-icons/all";
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

const NavBar = ({ toggle }) => {

    // states for subpage expansion (toggle via hover / active page)
    const [AboutExpanded, toggleAboutExpanded] = useState(true);
    const [RecoupExpanded, toggleRecoupExpanded] = useState(false);
    const [ServerExpanded, toggleServerExpanded] = useState(false);
    const [ContactExpanded, toggleContactExpanded] = useState(false);
    const [GithubHomeExpanded, toggleGithubHomeExpanded] = useState(false);
    const [GithubRecoupExpanded, toggleGithubRecoupExpanded] = useState(false);
    const [GithubServerExpanded, toggleGithubServerExpanded] = useState(false);
    const [GithubWebsiteExpanded, toggleGithubWebsiteExpanded] = useState(false);
    const [GithubDonateExpanded, toggleGithubDonatExpanded] = useState(false);
    const [GithubExpanded, toggleGithubExpanded] = useState(false);
    const onHover_0 = () => { toggleAboutExpanded(!AboutExpanded) }
    const onHover_1 = () => { toggleRecoupExpanded(!RecoupExpanded) }
    const onHover_2 = () => { toggleServerExpanded(!ServerExpanded)}
    const onHover_3 = () => { toggleContactExpanded(!ContactExpanded) }
    const onHover_4 = () => { toggleGithubExpanded(!GithubExpanded) }
    const onHover_5 = () => { toggleGithubHomeExpanded(!GithubHomeExpanded) }
    const onHover_6 = () => { toggleGithubRecoupExpanded(!GithubRecoupExpanded) }
    const onHover_7 = () => { toggleGithubServerExpanded(!GithubServerExpanded) }
    const onHover_8 = () => { toggleGithubWebsiteExpanded(!GithubWebsiteExpanded) }
    const onHover_9 = () => { toggleGithubDonatExpanded(!GithubDonateExpanded) }

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
                    <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                        <RoundLogo />
                    </a>

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
                        <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                            <Label>Recoup</Label>
                        </a>

                        {/* [UL] Subpage links */}
                        <SubpageLinks
                            style = {
                                RecoupExpanded
                                    ? { height: 'auto', visibility: 'visible' }
                                    : { }
                            }
                        >

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                    <Label>Concept Art</Label>
                                </a>
                            </SubpageLink>

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                    <Label>Download</Label>
                                </a>
                            </SubpageLink>

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                    <Label>Report a bug</Label>
                                </a>
                            </SubpageLink>

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

                        {/* [LABEL] */}
                        <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                            <Label>Game server</Label>
                        </a>

                        {/* [UL] Subpage links */}
                        <SubpageLinks
                            style = {
                                ServerExpanded
                                    ? { height: 'auto', visibility: 'visible' }
                                    : { }
                            }
                        >

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

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    ServerExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                    <Label>Report a bug</Label>
                                </a>
                            </SubpageLink>

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

                        {/* [LABEL] */}
                        <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                            <Label>Contact</Label>
                        </a>

                    </LinkWrapper>

                </Page>

                {/* Empty, for spacing */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

                <GithubContainer
                    onMouseEnter={ onHover_4 }
                    onMouseLeave={ onHover_4 }
                >

                    {/* [LI] github (logo) section */}
                    <Page
                        onMouseEnter={ onHover_5 }
                        onMouseLeave={ onHover_5 }

                        style={
                            { zIndex: '1000', paddingBottom: '48px' }
                        }
                    >

                        <a
                            href='#'
                            style={ { textDecoration: 'none', color: '#fff' } }
                        >
                            {/* [IMG] */}
                            <GithubIcon />
                        </a>

                    </Page>

                    {/* Empty, for spacing */}
                    <Page>
                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>


                        </LinkWrapper>

                    </Page>

                    {/* [LI] (github) Recoup section */}
                    <Page
                        onMouseEnter={ onHover_6 }
                        onMouseLeave={ onHover_6 }

                        style = {
                            GithubExpanded
                                ? { padding: '0 0 0 0', visibility: 'visible', height: 'auto' }
                                : { padding: '0 0 0 0', visibility: 'hidden', height: '0' }
                        }
                    >

                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>

                            {/* [IMG] */}
                            <Caret
                                style={ GithubRecoupExpanded && { visibility: 'visible' } }
                            />

                            {/* [LABEL] */}
                            <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                <Label>Recoup</Label>
                            </a>
                        </LinkWrapper>

                    </Page>

                    {/* [LI] (github) game Server section */}
                    <Page
                        onMouseEnter={ onHover_7 }
                        onMouseLeave={ onHover_7 }

                        style = {
                            GithubExpanded
                                ? { padding: '0 0 0 0', visibility: 'visible', height: 'auto' }
                                : { padding: '0 0 0 0', visibility: 'hidden', height: '0' }
                        }
                    >

                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>

                            {/* [IMG] */}
                            <Caret
                                style={ GithubServerExpanded && { visibility: 'visible' } }
                            />

                            {/* [LABEL] */}
                            <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                <Label>Game server</Label>
                            </a>
                        </LinkWrapper>

                    </Page>

                    {/* [LI] (github) Website section */}
                    <Page
                        onMouseEnter={ onHover_8 }
                        onMouseLeave={ onHover_8 }

                        style = {
                            GithubExpanded
                                ? { padding: '0 0 0 0', visibility: 'visible', height: 'auto' }
                                : { padding: '0 0 0 0', visibility: 'hidden', height: '0' }
                        }
                    >

                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>

                            {/* [IMG] */}
                            <Caret
                                style={ GithubWebsiteExpanded && { visibility: 'visible' } }
                            />

                            {/* [LABEL] */}
                            <a href='#' style={ { color: '#fff', textDecoration: 'none'}}>
                                <Label>This website</Label>
                            </a>
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
                <Page
                    onMouseEnter={ onHover_9 }
                    onMouseLeave={ onHover_9 }
                >

                    <a
                        href='#'
                        style={ { textDecoration: 'none', color: '#fff' } }
                    >
                        {/* [IMG] */}
                        <DonateIcon size={48} />
                    </a>

                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page
                    style = {
                        { paddingTop: '40px' }
                    }
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