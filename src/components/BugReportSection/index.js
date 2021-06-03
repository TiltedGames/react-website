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

const BugReportSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
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
                    <BoldText>

                    </BoldText>
                </Column_Dynamic>
            </Row>
        </PageContent>
    );
}

export default BugReportSection;