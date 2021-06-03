import React, { useState } from 'react'
// import page display elements
import {
    Column_FullWidth,
    Column_Header_Left,
    Column_Header_Right,
    PageContent, Row,
    Row_EqualHeights
} from "../PageLayoutElements";
// import tools section elements
import {
    ToolsHeader,
    ToolsSubheader
} from "../ToolsSection/ToolsSectionElements";
import {
    Header,
    Subheader,
    BoldText
} from "../PageDesignElements";
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
            <Row>
                <Column_Header_Left>
                    <Header>
                        One<br />Click<br />Server
                    </Header>
                </Column_Header_Left>
                <Column_Header_Right>
                    <Subheader>
                        Host your own server for Recoup, or start your own multiplayer project!
                    </Subheader>
                </Column_Header_Right>
            </Row>
            <Row>
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
            </Row>
        </PageContent>
    );
}

export default ToolsSection;