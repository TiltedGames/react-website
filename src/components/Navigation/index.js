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
    NavigationButtonLink
} from './NavigationElements';

// takes in toggle parameters to open/close sidebar
const NavigationBar = ({toggle}) => {
  return(
      <>
        <Navigation>
            <NavigationContainer>
                <NavigationLogoLink to='/'>
                    <NavigationLogo />
                </NavigationLogoLink>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavigationMenu>
                    <NavigationItem>
                        <NavigationLinks to='/'>
                            Games
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='/tools'>
                            Tools
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='/contact'>
                            Get in Touch
                        </NavigationLinks>
                    </NavigationItem>
                </NavigationMenu>

                <NavigationButton>
                    <NavigationButtonLink href='https://github.com/TiltedGames/'>
                        <FaGithubSquare />
                    </NavigationButtonLink>
                </NavigationButton>
            </NavigationContainer>
        </Navigation>
      </>
  );
};

export default NavigationBar;