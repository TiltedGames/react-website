import React from 'react';

// import navigation components
import {
    RoundLogo,
    GithubIcon,
    NavBarWrapper,
    NavBar,
    NavSection,
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

const NavigationBar = ({ toggle }) => { return(<>

    <NavBarWrapper>  {/* Wrapper for the navigation bar (for position control) */}

        <NavBar> {/* [UL] Navigation bar implemented */}

            <NavSection> {/* [LI] Tilted Games (logo) section */}
                <HomeLinkSelectionArea>
                    <RoundLogo />
                </HomeLinkSelectionArea>

                <AltSelectionCaret />
            </NavSection>

            <NavSection> {/* [LI] Recoup section */}
                <TextLinkWrapper>

                    <LinkSelectionArea>
                        <NavItemContent>Recoup</NavItemContent>
                    </LinkSelectionArea>

                    <SelectionCaret />

                    <NavSubitems>

                        <NavSubitemContent>Concept Art</NavSubitemContent>


                        <NavSubitemContent>Download</NavSubitemContent>

                    </NavSubitems>

                </TextLinkWrapper>
            </NavSection>

            <NavSection> {/* [LI] Game server section */}
                <TextLinkWrapper>

                    <LinkSelectionArea />
                    <SelectionCaret />

                    <NavItemContent>Game server</NavItemContent>

                    <NavSubitems>
                        <NavSubitemContent>Download</NavSubitemContent>
                        <NavSubitemContent>Help on Github</NavSubitemContent>
                    </NavSubitems>

                </TextLinkWrapper>
            </NavSection>

            <NavSection> {/* [LI] Contact section */}
                <TextLinkWrapper style={{ paddingBottom: '30px' }}>

                    <LinkSelectionArea />
                    <SelectionCaret />

                    <NavItemContent>Contact</NavItemContent>

                    <NavSubitems>
                        <NavSubitemContent>Report a bug</NavSubitemContent>
                    </NavSubitems>

                </TextLinkWrapper>
            </NavSection>

            <NavSection> {/* [LI] Github section */}
                <GithubPageLinkWrapper>

                    <a href='#' style={{ textDecoration: 'none' }}>
                        <GithubLinkSelectionArea />
                        <GithubIcon size={48} />
                    </a>

                    <GithubSelectionCaret />

                </GithubPageLinkWrapper>
                <GithubPageLinkWrapper>
                    <LinkSelectionArea />
                    <SelectionCaret />
                    <a href='#' style={{ textDecoration: 'none' }}>
                        <NavItemContent>Recoup</NavItemContent>
                    </a>
                </GithubPageLinkWrapper>
                <GithubPageLinkWrapper>
                    <LinkSelectionArea />
                    <SelectionCaret />
                    <a href='#' style={{ textDecoration: 'none' }}>
                        <NavItemContent>Game server</NavItemContent>
                    </a>
                </GithubPageLinkWrapper>
                <GithubPageLinkWrapper>
                    <LinkSelectionArea />
                    <SelectionCaret />
                    <a href='#' style={{ textDecoration: 'none' }}>
                        <NavItemContent>This site</NavItemContent>
                    </a>
                </GithubPageLinkWrapper>
                <GithubPageLinkWrapper>
                    <LinkSelectionArea />
                    <SelectionCaret />
                    <a href='#' style={{ textDecoration: 'none' }}>
                        <NavItemContent>Donate</NavItemContent>
                    </a>
                </GithubPageLinkWrapper>
            </NavSection>

        </NavBar>
    </NavBarWrapper>

</>);
};

export default NavigationBar;