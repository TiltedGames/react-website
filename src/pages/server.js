import React from 'react'
import {
    Card_Large, Card_Small,
    CardDescription_Large, CardDescription_Small,
    CardName,
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent,
    Row, Row_LimitWidth,
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
                        Game Server
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Host a server or start your own multiplayer project
                    </PageSubheading>
                </Column_Heading_Right>
            </Row_Header>
            <Row>
                    <Card_Small>
                        <CardName>
                            Voice Chat
                        </CardName>
                        <CardDescription_Small>
                            Talk with your friends on an encrypted voice server
                        </CardDescription_Small>
                    </Card_Small>
                    <Card_Small>
                        <CardName>
                            Text Chat
                        </CardName>
                        <CardDescription_Small>
                            No mic? No problem! Chat with your friends via text
                        </CardDescription_Small>
                    </Card_Small>
                    <Card_Small>
                        <CardName>
                            Built for ML
                        </CardName>
                        <CardDescription_Small>
                            Hand-crafted from the ground up to support machine learning
                        </CardDescription_Small>
                    </Card_Small>
                    <Card_Small>
                        <CardName>
                            .NET Web Sockets
                        </CardName>
                        <CardDescription_Small>
                            Built on a strong foundation, developed and supported by Microsoft
                        </CardDescription_Small>
                    </Card_Small>
                        <Card_Small>
                        <CardName>
                            Storage
                        </CardName>
                        <CardDescription_Small>
                            Save and load network data incredibly fast using Redis!
                        </CardDescription_Small>
                    </Card_Small>
                    <Card_Small>
                        <CardName>
                            Lightning Fast
                        </CardName>
                        <CardDescription_Small>
                            Speed, where you need it most!
                        </CardDescription_Small>
                    </Card_Small>
            </Row>
            <Row_LimitWidth>
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
            </Row_LimitWidth>
        </PageContent>
    );
}

export default Server;