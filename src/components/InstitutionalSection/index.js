import React from 'react';
import {
    Container,
    YellowBar,
    Row,
    DescriptionColumn,
    ImageColumn,
    DescriptionColumnTitle,
    DescriptionColumnText,
    DescriptionColumnLink,
    DescriptionColumnContent,
    DescriptionColumnTexts,
    WhiteLine,
    LinkContainer
} from './styles';
import CrownLogo from '../../assets/images/crown-logo.png';
import InstitutionalImage from '../../assets/images/institutional-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Container id="institucional">
            <YellowBar/>

            <Row>
                <DescriptionColumn>
                    <DescriptionColumnContent>
                        <DescriptionColumnTexts>
                            <img src={CrownLogo} />
                            <WhiteLine />
                            <DescriptionColumnTitle>Gota Real</DescriptionColumnTitle>
                            <DescriptionColumnText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </DescriptionColumnText>

                            <LinkContainer>
                                <DescriptionColumnLink href='#'>Saiba mais</DescriptionColumnLink>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </LinkContainer>
                        </DescriptionColumnTexts>
                    </DescriptionColumnContent>
                </DescriptionColumn>
                <ImageColumn>
                    <img src={InstitutionalImage} />
                </ImageColumn>
            </Row>
        </Container>
    );
}