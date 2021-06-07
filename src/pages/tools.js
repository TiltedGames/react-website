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
    Text, SectionText
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
        <PageContent id='server'>
            <Row>
                <Column_Heading_Left>
                    <PageHeading>
                        One<br />
                        Click<br />
                        Server
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
                    <Text>
                        Lightning Fast<br />
                        Speed, where you need it most!
                    </Text>
                    <Text>
                        Voice Chat<br />
                        Talk with your friends on an encrypted voice server
                    </Text>
                    <Text>
                        Text Chat<br />
                        No mic? No problem! Chat with your friends via text
                    </Text>
                    <Text>
                        Built for ML<br />
                        Hand-crafted from the ground up to support machine learning
                    </Text>
                    <Text>
                        .NET Web Sockets<br />
                        Built on a strong foundation, developed and supported by Microsoft
                    </Text>
                    <Text>
                        Storage<br />
                        Save and load network data incredibly fast using Redis!
                    </Text>
                    <ButtonWrapper id='server-download'>
                        <SectionText>
                            Download
                        </SectionText>
                        <DownloadButtons>
                            <WindowsButton>
                                <a href='#'><WinIcon size={48} /></a>
                            </WindowsButton>
                        </DownloadButtons>
                    </ButtonWrapper>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default Tools;