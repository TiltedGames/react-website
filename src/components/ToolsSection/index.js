import React, { useState } from 'react'
import {
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent, Row,
    Row_EqualHeights
} from "../PageLayoutElements";
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../PageDesignElements";
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
                <Column_Heading_Left>
                    <PageHeading>
                        One<br />Click<br />Server
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Host your own server for Recoup, or start your own multiplayer project!
                    </PageSubheading>
                </Column_Heading_Right>
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