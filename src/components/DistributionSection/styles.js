import styled from 'styled-components';
import DistributionBackground from '../../assets/images/distribution-background.png';

export const Container = styled.div`
    background-image: url(${DistributionBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #181818;
    padding: 160px 0px 160px 100px;
`;

export const DistributionTexts = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const DistributionBiggerTitle = styled.h5`
    font-size: 130px;
    color: #eeb53f;
    font-weight: 700;
    text-transform: uppercase;
`;

export const DistributionSmallerTitle = styled.h6`
    font-size: 90px;
    color: #eeb53f;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: -60px;
    margin-bottom: 0;
`;

export const DistributionDescription = styled.h5`
    font-size: 16px;
    color: #FFF;
    text-align: justify;
    width: 660px;
`;