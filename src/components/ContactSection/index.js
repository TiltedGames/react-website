import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import contact section elements
import {
    ContactHeader,
    ContactP,
    ContactSubheader
} from "../ContactSection/ContactSectionElements";
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
    Row_Content,
    Row_Header
} from "../PageLayoutElements";

const ContactSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row_Header>
                <Column_Header_Left>
                    <ContactHeader>
                        Hello!
                    </ContactHeader>
                </Column_Header_Left>
                <Column_Header_Right>
                    <ContactSubheader>
                        We'd love to hear from you
                    </ContactSubheader>
                </Column_Header_Right>
            </Row_Header>
            <Row_Content>
                <Column_Dynamic>
                    <ContactP>
                        Run into a bug? Click <a href="3" style={ { color : '#fff', textDecoration : 'none'} }>here</a>!
                    </ContactP>
                </Column_Dynamic>
            </Row_Content>
        </PageContent>
    );
}

export default ContactSection;