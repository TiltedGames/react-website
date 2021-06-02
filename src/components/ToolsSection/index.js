import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import page display elements
import {
    Column_FullWidth,
    Column_Header_Left,
    Column_Header_Right,
    PageContent, Row_Content,
    Row_Header
} from "../PageLayoutElements";
// import tools section elements
import {
    ToolsHeader,
    ToolsSubheader
} from "../ToolsSection/ToolsSectionElements";
// import button elements
import {
    ArrowForward,
    ArrowRight,
    DownloadButtonWrapper,
    DownloadButton,
    OSIcons,
    WinIconWrapper,
    WinIcon,
} from '../ButtonElements';


const ToolsSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row_Header>
                <Column_Header_Left>
                    <ToolsHeader>
                        One<br />Click<br />Server
                    </ToolsHeader>
                </Column_Header_Left>
                <Column_Header_Right>
                    <ToolsSubheader>
                        Host your own server for Recoup, or start your own multiplayer project!
                    </ToolsSubheader>
                </Column_Header_Right>
            </Row_Header>
            <Row_Content>
                <Column_FullWidth>
                    <DownloadButtonWrapper
                        onMouseEnter={ onHover }
                        onMouseLeave={ onHover }
                    >
                        <DownloadButton
                            light={ hover ? 'true' : 'false' }
                            big='true'
                        >
                            Download { hover ? <ArrowForward /> : <ArrowRight /> }
                        </DownloadButton>
                        <OSIcons
                            show={ hover ? 'true' : 'false' }
                        >
                            <WinIconWrapper><a href="#"><WinIcon size={48} /></a></WinIconWrapper>
                        </OSIcons>
                    </DownloadButtonWrapper>
                </Column_FullWidth>
            </Row_Content>
        </PageContent>
    );
}

export default ToolsSection;