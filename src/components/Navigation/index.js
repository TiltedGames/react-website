import React from 'react';

// import navigation components
import {
    VerticalNavBarWrapper,
    VerticalNavBar,
    VerticalNavItem,
    VerticalNavItemContent,
    HomePageLinkSelectionArea,
    LinkSelectionArea,
    GithubLinkSelectionArea,
    SelectionCaret,
    AltSelectionCaret,
    GithubSelectionCaret,
    VerticalNavSubitems,
    VerticalNavSubitemContent,
    MiddleItemWrapper,
    RoundLogo,
    GithubIcon
} from './NavigationElements';

// takes in toggle parameters to open/close sidebar
const NavigationBar = ({toggle}) => {
    return(
        <>
            <VerticalNavBarWrapper>
                <VerticalNavBar>
                    <VerticalNavItem>
                        <a href='#'>
                            <HomePageLinkSelectionArea></HomePageLinkSelectionArea>
                        </a>
                        <RoundLogo></RoundLogo>
                        <AltSelectionCaret />
                    </VerticalNavItem>
                    <MiddleItemWrapper>
                        <VerticalNavItem>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Recoup</VerticalNavItemContent>
                            </a>
                            <VerticalNavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <VerticalNavSubitemContent>
                                        Concept Art
                                    </VerticalNavSubitemContent>
                                </a>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <VerticalNavSubitemContent>
                                        Download
                                    </VerticalNavSubitemContent>
                                </a>
                            </VerticalNavSubitems>
                        </VerticalNavItem>
                    </MiddleItemWrapper>
                    <MiddleItemWrapper>
                        <VerticalNavItem>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Game server</VerticalNavItemContent>
                            </a>
                            <VerticalNavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <VerticalNavSubitemContent>
                                        Download
                                    </VerticalNavSubitemContent>
                                </a>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <VerticalNavSubitemContent>
                                        Help on Github
                                    </VerticalNavSubitemContent>
                                </a>
                            </VerticalNavSubitems>
                        </VerticalNavItem>
                    </MiddleItemWrapper>
                    <MiddleItemWrapper style={{ paddingBottom: '40px' }}>
                        <VerticalNavItem>
                            <LinkSelectionArea></LinkSelectionArea>
                            <SelectionCaret />
                            <a href='#' style={{ textDecoration: 'none' }}>
                                <VerticalNavItemContent>Contact</VerticalNavItemContent>
                            </a>
                            <VerticalNavSubitems>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    <VerticalNavSubitemContent>
                                        Report a bug
                                    </VerticalNavSubitemContent>
                                </a>
                            </VerticalNavSubitems>
                        </VerticalNavItem>
                    </MiddleItemWrapper>
                    <VerticalNavItem>
                        <GithubLinkSelectionArea></GithubLinkSelectionArea>
                        <GithubIcon size={48} />
                        <GithubSelectionCaret />
                    </VerticalNavItem>
                </VerticalNavBar>
            </VerticalNavBarWrapper>
        </>
    );
};

export default NavigationBar;