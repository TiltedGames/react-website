import React from 'react';

// import navigation components
import {
    VerticalNavBarWrapper,
    VerticalNavBar,
    VerticalNavItem,
    VerticalSeparator,
    VerticalNavItemNumber,
    VerticalNavItemContent,
    HomePageLinkSelectionArea,
    LinkSelectionArea,
    GithubLinkSelectionArea,
    SelectionCaret,
    AltSelectionCaret,
    GithubSelectionCaret,
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
                      <HomePageLinkSelectionArea></HomePageLinkSelectionArea>
                      <VerticalSeparator></VerticalSeparator>
                      <RoundLogo></RoundLogo>
                      <AltSelectionCaret />
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <LinkSelectionArea></LinkSelectionArea>
                      <VerticalSeparator></VerticalSeparator>
                      <SelectionCaret />
                      <VerticalNavItemContent>Recoup</VerticalNavItemContent>
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <LinkSelectionArea></LinkSelectionArea>
                      <VerticalSeparator></VerticalSeparator>
                      <SelectionCaret />
                      <VerticalNavItemContent>Tools</VerticalNavItemContent>
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <LinkSelectionArea></LinkSelectionArea>
                      <VerticalSeparator></VerticalSeparator>
                      <SelectionCaret />
                      <VerticalNavItemContent>Contact</VerticalNavItemContent>
                  </VerticalNavItem>
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