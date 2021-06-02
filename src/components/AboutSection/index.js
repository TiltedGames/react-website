import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    AboutContainer,
    AboutBackground,
    VideoBackground,
    AboutHeader,
    AboutContent,
    AboutP,
} from "./AboutSectionElements";

const AboutSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer>
            <AboutBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </AboutBackground>
            <AboutContent>
                <AboutHeader>
                    We are Tilted Games
                </AboutHeader>
                <AboutP>
                    And we're developing a game named Recoup! We're a small team of game developers, artists, publicists, financial specialists, and engineers looking to bring a new and exciting experience to you. At the moment, all of our software is open source, covered by the MIT license.
                </AboutP>
            </AboutContent>
        </AboutContainer>
    );
}

export default AboutSection;