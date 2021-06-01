import React from 'react';

// import navigation components
import {
    RoundLogo,
    GithubIcon,
    NavBarWrapper,
    NavBar,
    PageLink,
    NavSubitems,
    NavSubitemContent,
    NavItemContent,
    HomeLinkSelectionArea,
    LinkSelectionArea,
    GithubLinkSelectionArea,
    SelectionCaret,
    AltSelectionCaret,
    GithubSelectionCaret,
    TextLinkWrapper,
    GithubPageLinkWrapper
} from './NavigationElements';

// takes in toggle parameters to open/close sidebar
const NavigationBar = ({ toggle }) => {
    return(
        <>
            <NavBarWrapper>
                <NavBar>
                    <PageLink>
                        <a href='#'>
                            <RoundLogo></RoundLogo>
                            <HomeLinkSelectionArea></HomeLinkSelectionArea>
                        </a>
                        <RoundLogo></RoundLogo>
                        <AltSelectionCaret />
                    </PageLink>
                    <TextLinkWrapper>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    Recoup
                                </NavItemContent>
                            </a>
                            <NavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <NavSubitemContent>
                                        Concept Art
                                    </NavSubitemContent>
                                </a>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <NavSubitemContent>
                                        Download
                                    </NavSubitemContent>
                                </a>
                            </NavSubitems>
                        </PageLink>
                    </TextLinkWrapper>
                    <TextLinkWrapper>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    Game server
                                </NavItemContent>
                            </a>
                            <NavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <NavSubitemContent>
                                        Download
                                    </NavSubitemContent>
                                </a>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <NavSubitemContent>
                                        Help on Github
                                    </NavSubitemContent>
                                </a>
                            </NavSubitems>
                        </PageLink>
                    </TextLinkWrapper>
                    <TextLinkWrapper style={{ paddingBottom: '40px' }}>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    Contact
                                </NavItemContent>
                            </a>
                            <NavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <NavSubitemContent>
                                        Report a bug
                                    </NavSubitemContent>
                                </a>
                            </NavSubitems>
                        </PageLink>
                    </TextLinkWrapper>
                    <GithubPageLinkWrapper>
                        <PageLink>
                            <GithubLinkSelectionArea></GithubLinkSelectionArea>
                            <GithubIcon size={48} />
                            <GithubSelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    Recoup
                                </NavItemContent>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    Game server
                                </NavItemContent>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    This site
                                </NavItemContent>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <NavItemContent>
                                    Donate
                                </NavItemContent>
                            </a>
                        </PageLink>
                    </GithubPageLinkWrapper>
                </NavBar>
            </NavBarWrapper>
        </>
    );
};

export default NavigationBar;