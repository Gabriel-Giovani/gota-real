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
    DescriptionColumnTexts
} from './styles';
import CrownLogo from '../../assets/images/crown-logo.png';
import InstitutionalImage from '../../assets/images/institutional-image.png';

export default () => {
    return (
        <>
            <Container>
                <YellowBar/>

                <Row>
                    <DescriptionColumn>
                        <DescriptionColumnContent>
                            <DescriptionColumnTexts>
                                <img src={CrownLogo} />
                                <DescriptionColumnTitle>Gota Real</DescriptionColumnTitle>
                                <DescriptionColumnText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </DescriptionColumnText>
                                <DescriptionColumnLink href='#'>Saiba mais</DescriptionColumnLink>
                            </DescriptionColumnTexts>
                        </DescriptionColumnContent>
                    </DescriptionColumn>
                    <ImageColumn>
                        <img src={InstitutionalImage} />
                    </ImageColumn>
                </Row>
            </Container>
        </>
    );
}