import React from 'react';

// import navigation icons (hamburger menu / github icons)
import {
    FaBars,
    FaGithubSquare
} from 'react-icons/fa'

// import navigation components
import {
    Navigation,
    NavigationContainer,
    NavigationLogo,
    NavigationLogoLink,
    MobileIcon,
    NavigationMenu,
    NavigationItem,
    NavigationLinks,
    NavigationButton,
    NavigationButtonLink,
    VerticalNavBarWrapper,
    VerticalNavBar,
    VerticalNavItem,
    VerticalSeparator,
    VerticalNavItemNumber,
    VerticalNavItemContent,
    SelectionCaret
} from './NavigationElements';

// takes in toggle parameters to open/close sidebar
const NavigationBar = ({toggle}) => {
  return(
      <>
          <VerticalNavBarWrapper>
              <VerticalNavBar>
                  <VerticalNavItem>
                      <VerticalSeparator></VerticalSeparator>
                      <VerticalNavItemNumber>1</VerticalNavItemNumber>
                      <SelectionCaret />
                      <VerticalNavItemContent>Home</VerticalNavItemContent>
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
                      <VerticalNavItemNumber>4</VerticalNavItemNumber>
                      <SelectionCaret />
                      <VerticalNavItemContent>Get in Touch</VerticalNavItemContent>
                  </VerticalNavItem>
              </VerticalNavBar>
          </VerticalNavBarWrapper>
      </>
  );
};

export default NavigationBar;