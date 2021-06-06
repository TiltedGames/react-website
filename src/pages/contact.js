import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading
} from "../components/design";
import {
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent,
    Row
} from "../components/layout";
import {
    Button,
    ButtonWrapper
} from "../components/buttons";

/*

        PAGE COMPONENT

*/

const Contact = () => {
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
                    <ButtonWrapper
                        onMouseEnter={ onHover }
                        onMouseLeave={ onHover }
                    >
                        <Button
                            light={ hover ? 'true' : 'false' }
                            big='true'
                        >
                            Send
                        </Button>
                    </ButtonWrapper>
                </Column_Dynamic>
            </Row>
        </PageContent>
    );
}

export default Contact;