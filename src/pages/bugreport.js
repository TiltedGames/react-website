import React, { useState } from 'react'
import {
    PageHeading,
    PageSubheading
} from '../components/text';
import {
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right,
    PageContent,
    Row
} from '../components/layout';
import {
    Button,
    ButtonWrapper
} from '../components/buttons';

const BugReport = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent id='bugreport'>
            <Row>
                <Column_Heading_Left>
                    <PageHeading>
                        Report a bug
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        Your feedback is incredibly helpful!
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

export default BugReport;