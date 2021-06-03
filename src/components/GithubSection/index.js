import React, { useState } from 'react'
import {
    PageContent,
    Row_EqualHeights,
    Row,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic,
    Column_Header_Left,
    Column_Header_Right
} from "../PageLayoutElements";
import {
    Header,
    Subheader,
    BoldText
} from "../PageDesignElements";

const GithubSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row>
                <Column_Header_Left>
                    <Header>
                        Tilted<br />Games<br />On Github
                    </Header>
                </Column_Header_Left>
                <Column_Header_Right>
                    <Subheader>
                        We proudly support open-source software. Access ours on Github, for free!
                    </Subheader>
                </Column_Header_Right>
            </Row>
            <Row>
                <Column_FullWidth>
                    <BoldText>
                        Great software begins with great people. Our goal is not just to create games, but to foster an open environment conducive to learning and creativity. For this reason, we host our development out in the open, on Github, and host <a style={ { color: '#fff' } } href='#'>a Discord server</a> open to the public. Come say hi and see where development is at!
                    </BoldText>
                </Column_FullWidth>
            </Row>
        </PageContent>
    );
}

export default GithubSection;