import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../PageDesignElements";
import {
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
    SendButton
} from '../ButtonElements';
import {
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right,
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
                <Column_Heading_Left>
                    <PageHeading>
                        Hello!
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        We'd love to hear from you
                    </PageSubheading>
                </Column_Heading_Right>
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