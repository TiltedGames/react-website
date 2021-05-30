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
    MobileIcon,
    NavigationMenu,
    NavigationItem,
    NavigationLinks,
    NavigationButton,
    NavigationButtonLink
} from './NavigationElements';


const NavigationBar = ({toggle}) => {
  return(
      <>
        <Navigation>
            <NavigationContainer>
                <NavigationLogo to='/'>
                    Tilted Games
                </NavigationLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavigationMenu>
                    <NavigationItem>
                        <NavigationLinks to='recoup'>
                            Games
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='server'>
                            Tools
                        </NavigationLinks>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLinks to='contact'>
                            Get in Touch
                        </NavigationLinks>
                    </NavigationItem>
                </NavigationMenu>

                <NavigationButton>
                    <NavigationButtonLink>
                        <FaGithubSquare />
                    </NavigationButtonLink>
                </NavigationButton>
            </NavigationContainer>
        </Navigation>
      </>
  );
};

export default NavigationBar;