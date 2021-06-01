import React from 'react';

// import navigation components
import {
    NavBarWrapper,
    lNavBar,
    PageLink,
    VerticalNavItemContent,
    HomePageLinkSelectionArea,
    LinkSelectionArea,
    GithubLinkSelectionArea,
    SelectionCaret,
    AltSelectionCaret,
    GithubSelectionCaret,
    NavSubitems,
    GithubSubitems,
    NavSubitemContent,
    SitePageLinkWrapper,
    GithubPageLinkWrapper,
    RoundLogo,
    GithubIcon
} from './NavigationElements';

// takes in toggle parameters to open/close sidebar
const NavigationBar = ({toggle}) => {
    return(
        <>
            <NavBarWrapper>
                <lNavBar>
                    <PageLink>
                        <a href='#'>
                            <HomePageLinkSelectionArea></HomePageLinkSelectionArea>
                        </a>
                        <RoundLogo></RoundLogo>
                        <AltSelectionCaret />
                    </PageLink>
                    <SitePageLinkWrapper>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Recoup</VerticalNavItemContent>
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
                    </SitePageLinkWrapper>
                    <SitePageLinkWrapper>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Game server</VerticalNavItemContent>
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
                    </SitePageLinkWrapper>
                    <SitePageLinkWrapper style={{ paddingBottom: '40px' }}>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Contact</VerticalNavItemContent>
                            </a>
                            <NavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <NavSubitemContent>
                                        Report a bug
                                    </NavSubitemContent>
                                </a>
                            </NavSubitems>
                        </PageLink>
                    </SitePageLinkWrapper>
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
                                <VerticalNavItemContent>Recoup</VerticalNavItemContent>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Game server</VerticalNavItemContent>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>This site</VerticalNavItemContent>
                            </a>
                        </PageLink>
                        <PageLink>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Donate</VerticalNavItemContent>
                            </a>
                        </PageLink>
                    </GithubPageLinkWrapper>
                </lNavBar>
            </NavBarWrapper>
        </>
    );
};

export default NavigationBar;