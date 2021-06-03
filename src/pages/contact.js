import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../components/design";
import {
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
    SendButton
} from '../components/buttons';
import {
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent,
    Row,
    Row_EqualHeights
} from "../components/layout";

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
                        Contact
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

                    </BoldText>
                </Column_Dynamic>
            </Row>
        </PageContent>
    );
}

export default ContactSection;