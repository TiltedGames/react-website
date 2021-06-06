import React, { useState } from 'react'
import {
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent,
    Row
} from "../components/layout";
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../components/design";
import {
    ArrowForward,
    ArrowRight,
    DownloadButtonWrapper,
    DownloadButton,
    OSIcons,
    WinIconWrapper,
    WinIcon,
} from '../components/buttons';

/*

        PAGE COMPONENT

*/

const Tools = () => {
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
                    <BoldText>
                        Lightning Fast<br />
                        Speed, where you need it most!
                    </BoldText>
                    <BoldText>
                        Voice Chat<br />
                        Talk with your friends on an encrypted voice server
                    </BoldText>
                    <BoldText>
                        Text Chat<br />
                        No mic? No problem! Chat with your friends via text
                    </BoldText>
                    <BoldText>
                        Built for ML<br />
                        Hand-crafted from the ground up to support machine learning
                    </BoldText>
                    <BoldText>
                        .NET Web Sockets<br />
                        Built on a strong foundation, developed and supported by Microsoft
                    </BoldText>
                    <BoldText>
                        Storage<br />
                        Save and load network data incredibly fast using Redis!
                    </BoldText>
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

export default Tools;