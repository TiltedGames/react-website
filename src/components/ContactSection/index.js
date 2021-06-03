import React, { useState } from 'react'
// import contact section elements
import {
    Header,
    Subheader,
    BoldText
} from "../PageDesignElements";
// import button
import {
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
    SendButton
} from '../ButtonElements';
import {
    Column_Dynamic,
    Column_Header_Left,
    Column_Header_Right,
    PageContent,
    Row,
    Row_EqualHeights
} from "../PageLayoutElements";

const ContactSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row>
                <Column_Header_Left>
                    <Header>
                        Hello!
                    </Header>
                </Column_Header_Left>
                <Column_Header_Right>
                    <Subheader>
                        We'd love to hear from you
                    </Subheader>
                </Column_Header_Right>
            </Row>
            <Row>
                <Column_Dynamic>
                    <BoldText>
                        Run into a bug? Click <a href="3" style={ { color : '#fff', textDecoration : 'none'} }>here</a>!
                    </BoldText>
                </Column_Dynamic>
            </Row>
        </PageContent>
    );
}

export default ContactSection;