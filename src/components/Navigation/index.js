import React from 'react';
import {
    RoundLogo,
    GithubIcon,
    NavBarWrapper,
    NavBar,
    NavSection,
    NavSubitems,
    NavSubitemContent,
    LinkText,
    SelectionCaret,
    AltSelectionCaret,
    GithubSelectionCaret,
    TextLinkWrapper,
    GithubPageLinkWrapper,
    GithubPageLink
} from './NavigationElements';

const NavigationBar = ({ toggle }) => { return(<>
    {/* Wrapper for the navigation bar (for position control) */}
    <NavBarWrapper>
        {/* [UL] Navigation bar implemented */}
        <NavBar>

            {/* [LI] Tilted Games (logo) section */}
            <NavSection>
                {/* [IMG] */}
                <AltSelectionCaret />
                {/* [IMG] */}
                <RoundLogo />
            </NavSection>

            {/* [LI] Recoup section */}
            <NavSection>
                {/* [DIV] (white vertical line) */}
                <TextLinkWrapper>
                    {/* [IMG] */}
                    <SelectionCaret />
                    {/* [P] */}
                    <LinkText>Recoup</LinkText>
                    {/* [UL] Subpage links */}
                    <NavSubitems>
                        {/* [LI] */}
                        <NavSubitemContent>Concept Art</NavSubitemContent>
                        {/* [LI] */}
                        <NavSubitemContent>Download</NavSubitemContent>
                    </NavSubitems>
                </TextLinkWrapper>
            </NavSection>

            {/* [LI] Game server section */}
            <NavSection>
                {/* [DIV] (white vertical line) */}
                <TextLinkWrapper>
                    {/* [IMG] */}
                    <SelectionCaret />
                    {/* [P] */}
                    <LinkText>Game server</LinkText>
                    {/* [UL] Subpage links */}
                    <NavSubitems>
                        {/* [LI] */}
                        <NavSubitemContent>Download</NavSubitemContent>
                        {/* [LI] */}
                        <NavSubitemContent>Help on Github</NavSubitemContent>
                    </NavSubitems>
                </TextLinkWrapper>
            </NavSection>

            {/* [LI] Contact section */}
            <NavSection>
                {/* [DIV] (white vertical line) */}
                <TextLinkWrapper style={{ paddingBottom: '30px' }}>
                    {/* [IMG] */}
                    <SelectionCaret />
                    {/* [P] */}
                    <LinkText>Contact</LinkText>
                    {/* [UL] Subpage links */}
                    <NavSubitems>
                        {/* [LI] */}
                        <NavSubitemContent>Report a bug</NavSubitemContent>
                    </NavSubitems>
                </TextLinkWrapper>
            </NavSection>

            {/* [LI] Github section */}
            <NavSection>
                {/* [IMG] */}
                <GithubSelectionCaret />
                {/* [ A [IMG] ] */}
                <a href='#' style={{ textDecoration: 'none' }}><GithubIcon size={48} /></a>
                {/* [UL] (animated white vertical line) */}
                <GithubPageLinkWrapper>
                    {/* [LI] */}
                    <GithubPageLink>
                        <a href='#' style={{ textDecoration: 'none' }}>
                            {/* [P] */}
                            <LinkText>Recoup</LinkText>
                        </a>
                    </GithubPageLink>
                    {/* [LI] */}
                    <GithubPageLink>
                        <a href='#' style={{ textDecoration: 'none' }}>
                            {/* [P] */}
                            <LinkText>Game Server</LinkText>
                        </a>
                    </GithubPageLink>
                    {/* [LI] */}
                    <GithubPageLink>
                        <a href='#' style={{ textDecoration: 'none' }}>
                            {/* [P] */}
                            <LinkText>This Website</LinkText>
                        </a>
                    </GithubPageLink>
                </GithubPageLinkWrapper>
            </NavSection>
        </NavBar>
    </NavBarWrapper>
</>);
};

export default NavigationBar;