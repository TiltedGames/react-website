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
    GithubSubpageLink, DonateIcon, GithubContainer
} from '../components/navbar';

const NavigationBar = ({ toggle }) => {

    // states for subpage expansion (toggle via hover / active page)
    const [AboutExpanded, toggleAboutExpanded] = useState(true);
    const [RecoupExpanded, toggleRecoupExpanded] = useState(false);
    const [ServerExpanded, toggleServerExpanded] = useState(false);
    const [ContactExpanded, toggleContactExpanded] = useState(false);
    const [GithubHomeExpanded, toggleGithubHomeExpanded] = useState(false);
    const [GithubRecoupExpanded, toggleGithubRecoupExpanded] = useState(false);
    const [GithubServerExpanded, toggleGithubServerExpanded] = useState(false);
    const [GithubWebsiteExpanded, toggleGithubWebsiteExpanded] = useState(false);
    const [GithubDonateExpanded, toggleGithubDonatExpanded] = useState(false);
    const [GithubExpanded, toggleGithubExpanded] = useState(false);
    const onHover_0 = () => { toggleAboutExpanded(!AboutExpanded) }
    const onHover_1 = () => { toggleRecoupExpanded(!RecoupExpanded) }
    const onHover_2 = () => { toggleServerExpanded(!ServerExpanded)}
    const onHover_3 = () => { toggleContactExpanded(!ContactExpanded) }
    const onHover_4 = () => { toggleGithubExpanded(!GithubExpanded) }
    const onHover_5 = () => { toggleGithubHomeExpanded(!GithubHomeExpanded) }
    const onHover_6 = () => { toggleGithubRecoupExpanded(!GithubRecoupExpanded) }
    const onHover_7 = () => { toggleGithubServerExpanded(!GithubServerExpanded) }
    const onHover_8 = () => { toggleGithubWebsiteExpanded(!GithubWebsiteExpanded) }
    const onHover_9 = () => { toggleGithubDonatExpanded(!GithubDonateExpanded) }

    return (<>

        {/* Wrapper for the navigation bar (for position control) */}
        <Wrapper>

            {/* [UL] navigation bar implemented */}
            <Pages>

                {/* [LI] Tilted Games (logo) section */}
                <Page
                    onMouseEnter={ onHover_0 }
                    onMouseLeave={ onHover_0 }

                    style={
                        { zIndex: '1000', paddingBottom: '32px' }
                    }
                >

                    {/* [IMG] */}
                    <RoundLogo />

                </Page>

                {/* Empty, for spacing */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

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

                {/* [LI] game server section */}
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
                                <Label>Report a bug</Label>
                            </SubpageLink>

                        </SubpageLinks>

                    </LinkWrapper>

                </Page>

                {/* [LI] contact section */}
                <Page
                    onMouseEnter={ onHover_3 }
                    onMouseLeave={ onHover_3 }
                >

                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>

                        {/* [IMG] */}
                        <Caret
                            style={ ContactExpanded && { visibility: 'visible' } }
                        />

                        {/* [LABEL] */}
                        <Label>Contact</Label>

                    </LinkWrapper>

                </Page>

                {/* Empty, for spacing */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

                <GithubContainer
                    onMouseEnter={ onHover_4 }
                    onMouseLeave={ onHover_4 }
                >

                    {/* [LI] github (logo) section */}
                    <Page
                        onMouseEnter={ onHover_5 }
                        onMouseLeave={ onHover_5 }

                        style={
                            { zIndex: '1000', paddingBottom: '48px' }
                        }
                    >

                        <a
                            href='#'
                            style={ { textDecoration: 'none', color: '#fff' } }
                        >
                            {/* [IMG] */}
                            <GithubIcon />
                        </a>

                    </Page>

                    {/* Empty, for spacing */}
                    <Page>
                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>


                        </LinkWrapper>

                    </Page>

                    {/* [LI] (github) Recoup section */}
                    <Page
                        onMouseEnter={ onHover_6 }
                        onMouseLeave={ onHover_6 }

                        style = {
                            GithubExpanded
                                ? { padding: '0 0 0 0', visibility: 'visible', height: 'auto' }
                                : { padding: '0 0 0 0', visibility: 'hidden', height: '0' }
                        }
                    >

                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>

                            {/* [IMG] */}
                            <Caret
                                style={ GithubRecoupExpanded && { visibility: 'visible' } }
                            />

                            {/* [LABEL] */}
                            <Label>Recoup</Label>
                        </LinkWrapper>

                    </Page>

                    {/* [LI] (github) game Server section */}
                    <Page
                        onMouseEnter={ onHover_7 }
                        onMouseLeave={ onHover_7 }

                        style = {
                            GithubExpanded
                                ? { padding: '0 0 0 0', visibility: 'visible', height: 'auto' }
                                : { padding: '0 0 0 0', visibility: 'hidden', height: '0' }
                        }
                    >

                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>

                            {/* [IMG] */}
                            <Caret
                                style={ GithubServerExpanded && { visibility: 'visible' } }
                            />

                            {/* [LABEL] */}
                            <Label>Game server</Label>
                        </LinkWrapper>

                    </Page>

                    {/* [LI] (github) Website section */}
                    <Page
                        onMouseEnter={ onHover_8 }
                        onMouseLeave={ onHover_8 }

                        style = {
                            GithubExpanded
                                ? { padding: '0 0 0 0', visibility: 'visible', height: 'auto' }
                                : { padding: '0 0 0 0', visibility: 'hidden', height: '0' }
                        }
                    >

                        {/* [DIV] (white vertical line) */}
                        <LinkWrapper>

                            {/* [IMG] */}
                            <Caret
                                style={ GithubWebsiteExpanded && { visibility: 'visible' } }
                            />

                            {/* [LABEL] */}
                            <Label>This website</Label>
                        </LinkWrapper>

                    </Page>

                </GithubContainer>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page>
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

                {/* [LI] github donate (logo) section */}
                <Page
                    onMouseEnter={ onHover_9 }
                    onMouseLeave={ onHover_9 }
                >

                    <a
                        href='#'
                        style={ { textDecoration: 'none', color: '#fff' } }
                    >
                        {/* [IMG] */}
                        <DonateIcon size={48} />
                    </a>

                </Page>

                {/* Empty, for spacing between github / donate icons while no expansion */}
                <Page
                    style = {
                        { paddingTop: '40px' }
                    }
                >
                    {/* [DIV] (white vertical line) */}
                    <LinkWrapper>


                    </LinkWrapper>

                </Page>

            </Pages>

        </Wrapper>
    </>);
};

export default NavigationBar;