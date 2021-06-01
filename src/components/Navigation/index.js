import React from 'react';

// import navigation components
import {
    VerticalNavBarWrapper,
    VerticalNavBar,
    VerticalNavItem,
    VerticalSeparator,
    VerticalNavItemNumber,
    VerticalNavItemContent,
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
                      <VerticalSeparator></VerticalSeparator>
                      <RoundLogo></RoundLogo>
                      <AltSelectionCaret />
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <VerticalSeparator></VerticalSeparator>
                      <VerticalNavItemNumber>2</VerticalNavItemNumber>
                      <SelectionCaret />
                      <VerticalNavItemContent>Recoup</VerticalNavItemContent>
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <VerticalSeparator></VerticalSeparator>
                      <VerticalNavItemNumber>3</VerticalNavItemNumber>
                      <SelectionCaret />
                      <VerticalNavItemContent>Tools</VerticalNavItemContent>
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <VerticalSeparator></VerticalSeparator>
                      <VerticalNavItemNumber>4</VerticalNavItemNumber>
                      <SelectionCaret />
                      <VerticalNavItemContent>Contact</VerticalNavItemContent>
                  </VerticalNavItem>
                  <VerticalNavItem>
                      <GithubIcon size={48} />
                      <GithubSelectionCaret />
                  </VerticalNavItem>
              </VerticalNavBar>
          </VerticalNavBarWrapper>
      </>
  );
};

export default NavigationBar;