import React, {useState} from 'react';
import {
    RoundLogo,
    GithubIcon,
    Wrapper,
    Pages,
    Page,
    GithubPage,
    SubpageLinks,
    SubpageLink,
    Label,
    Caret,
    GithubCaret,
    LinkWrapper,
    GithubPageLinkWrapper,
    GithubSubpageLink
} from './NavigationElements';

const NavigationBar = ({ toggle }) => {

    // states for subpage expansion (toggle via hover / active page)
    const [RecoupExpanded, toggleRecoupExpanded] = useState(false);
    const [ServerExpanded, toggleServerExpanded] = useState(false);
    const [ContactExpanded, toggleContactExpanded] = useState(false);
    const [GithubExpanded, toggleGithubExpanded] = useState(false);
    const onHover_1 = () => { toggleRecoupExpanded(!RecoupExpanded) }
    const onHover_2 = () => { toggleServerExpanded(!ServerExpanded)}
    const onHover_3 = () => { toggleContactExpanded(!ContactExpanded) }
    const onHover_4 = () => { toggleGithubExpanded(!GithubExpanded) }

    return (<>

        {/* Wrapper for the navigation bar (for position control) */}
        <Wrapper>

            {/* [UL] Navigation bar implemented */}
            <Pages>

                {/* [LI] Tilted Games (logo) section */}
                <Page
                    style={
                        { zIndex: '1000', paddingBottom: '32px' }
                    }
                >

                    {/* [IMG] */}
                    <RoundLogo />

                </Page>

                {/* [LI] Recoup section */}
                <Page
                    onMouseEnter={ onHover_1 }
                    onMouseLeave={ onHover_1 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>

                        {/* [IMG] */}
                        <Caret
                            style={
                                RecoupExpanded && { visibility: 'visible' }
                            }
                        />

                        {/* [LABEL] */}
                        <Label>Recoup</Label>

                        {/* [UL] Subpage links */}
                        <SubpageLinks
                            style = {
                                RecoupExpanded
                                    ? { height: 'auto', visibility: 'visible' }
                                    : { }
                            }
                        >

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Concept Art</Label>
                            </SubpageLink>

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Download</Label>
                            </SubpageLink>

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    RecoupExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Report a bug</Label>
                            </SubpageLink>

                        </SubpageLinks>
                    </LinkWrapper>

                </Page>

                {/* [LI] Game server section */}
                <Page
                    onMouseEnter={ onHover_2 }
                    onMouseLeave={ onHover_2 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>

                        {/* [IMG] */}
                        <Caret
                            style={ ServerExpanded && { visibility: 'visible' } }
                        />

                        {/* [LABEL] */}
                        <Label>Game server</Label>

                        {/* [UL] Subpage links */}
                        <SubpageLinks
                            style = {
                                ServerExpanded
                                    ? { height: 'auto', visibility: 'visible' }
                                    : { }
                            }
                        >

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    ServerExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Download</Label>
                            </SubpageLink>

                            {/* [LI] */}
                            <SubpageLink
                                style = {
                                    ServerExpanded
                                        ? { padding: '30px 0 0 20px', visibility: 'visible', height: 'auto' }
                                        : { }
                                }
                            >
                                {/* [LABEL] */}
                                <Label>Help on Github</Label>
                            </SubpageLink>

                        </SubpageLinks>

                    </LinkWrapper>

                </Page>

                {/* [LI] Contact section */}
                <Page
                    onMouseEnter={ onHover_3 }
                    onMouseLeave={ onHover_3 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper
                        style={ { paddingBottom: '50px' } }
                    >

                        {/* [IMG] */}
                        <Caret
                            style={ ContactExpanded && { visibility: 'visible' } }
                        />

                        {/* [LABEL] */}
                        <Label>Contact</Label>

                    </LinkWrapper>

                </Page>

                {/* [LI] Github (logo) section */}
                <Page
                    style={
                        { zIndex: '1000', paddingBottom: '32px' }
                    }
                >

                    <a
                        href='#'
                        style={ { textDecoration: 'none', color: '#fff' } }
                    >
                        {/* [IMG] */}
                        <GithubIcon size={48} />
                    </a>

                </Page>

                {/* [LI] (Github) Recoup section */}
                <Page
                    onMouseEnter={ onHover_4 }
                    onMouseLeave={ onHover_4 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                        {/* [LABEL] */}
                        <Label>Contact</Label>

                    </LinkWrapper>

                </Page>

            </Pages>

        </Wrapper>
    </>);
};

export default NavigationBar;