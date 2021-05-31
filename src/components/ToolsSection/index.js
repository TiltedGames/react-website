import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    ToolsContainer,
    ToolsBackground,
    VideoBackground,
    ToolsHeader,
    ToolsContent,
    ToolsP
} from "./ToolsSectionElements";
// import button
import {
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
    SendButton
} from '../ButtonElements';

const ToolsSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ToolsContainer>
            <ToolsBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </ToolsBackground>
            <ToolsContent>
                <ToolsHeader>
                    Tools
                </ToolsHeader>
                <ToolsP>
                    Recoup is still early in development. Stay tuned for more updates!
                </ToolsP>
                <ButtonWrapper
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    <SendButton
                        light='true'
                        big='true'
                    >
                        Send { hover ? <ArrowForward /> : <ArrowRight /> }
                    </SendButton>
                </ButtonWrapper>
            </ToolsContent>
        </ToolsContainer>
    );
}

export default ToolsSection;