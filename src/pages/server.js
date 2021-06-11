import React from 'react'
import {
    Card,
    CardDescription,
    CardName,
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent,
    Row,
    Row_Header
} from '../components/layout';
import {
    PageHeading,
    PageSubheading,
    SectionText
} from '../components/text';
import {
    ButtonWrapper,
    DownloadButtons,
    WindowsButton,
    WinIcon,
} from '../components/buttons';

const Server = () => {
    return (
        <PageContent id='server'>
            <Row_Header>
                <Column_Heading_Left>
                    <PageHeading>
                        One<br />
                        Click<br />
                        Server
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Host a Recoup server, or use this to start your own multiplayer project
                    </PageSubheading>
                </Column_Heading_Right>
            </Row_Header>
            <Row>
                <Column_Dynamic>
                    <Card>
                        <CardName>
                            Voice Chat
                        </CardName>
                        <CardDescription>
                            Talk with your friends on an encrypted voice server
                        </CardDescription>
                    </Card>
                </Column_Dynamic>
                <Column_Dynamic>
                    <Card>
                        <CardName>
                            Text Chat
                        </CardName>
                        <CardDescription>
                            No mic? No problem! Chat with your friends via text
                        </CardDescription>
                    </Card>
                </Column_Dynamic>
                <Column_Dynamic>
                    <Card>
                        <CardName>
                            Built for ML
                        </CardName>
                        <CardDescription>
                            Hand-crafted from the ground up to support machine learning
                        </CardDescription>
                    </Card>
                </Column_Dynamic>
                <Column_Dynamic>
                    <Card>
                        <CardName>
                            .NET Web Sockets
                        </CardName>
                        <CardDescription>
                            Built on a strong foundation, developed and supported by Microsoft
                        </CardDescription>
                    </Card>
                </Column_Dynamic>
                <Column_Dynamic>
                    <Card>
                        <CardName>
                            Storage
                        </CardName>
                        <CardDescription>
                            Save and load network data incredibly fast using Redis!
                        </CardDescription>
                    </Card>
                </Column_Dynamic>
                <Column_Dynamic>
                    <Card>
                        <CardName>
                            Lightning Fast
                        </CardName>
                        <CardDescription>
                            Speed, where you need it most!
                        </CardDescription>
                    </Card>
                </Column_Dynamic>
            </Row>
            <Row>
                <ButtonWrapper id='server-download'>
                    <SectionText>
                        Download
                    </SectionText>
                    <DownloadButtons>
                        <WindowsButton>
                            <a href='https://github.com/TiltedGames/one-click-server/archive/refs/heads/main.zip'><WinIcon size={48} /></a>
                        </WindowsButton>
                    </DownloadButtons>
                </ButtonWrapper>
            </Row>
        </PageContent>
    );
}

export default Server;