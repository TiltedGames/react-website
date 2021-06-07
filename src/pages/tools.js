import React from 'react'
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
    BoldText, SectionText
} from "../components/design";
import {
    ButtonWrapper,
    DownloadButtons,
    WindowsButton,
    WinIcon,
} from '../components/buttons';

/*

        PAGE COMPONENT

*/

const Tools = () => {
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
                        Host your own server for Recoup, or start your own multiplayer project
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
                    <ButtonWrapper>
                        <SectionText>Download</SectionText>
                        <DownloadButtons>
                            <WindowsButton><a href="#"><WinIcon size={48} /></a></WindowsButton>
                        </DownloadButtons>
                    </ButtonWrapper>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default Tools;