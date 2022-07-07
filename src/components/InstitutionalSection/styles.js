import styled from 'styled-components';

export const Container = styled.div`
    height: 600px;
`;

export const YellowBar = styled.div`
    width: 100%;
    height: 34px;
    background-color: #eeb53f;
    margin-bottom: 24px;
`;

export const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DescriptionColumn = styled.div`
    background-color: #161616;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 115px 0;
`;

export const DescriptionColumnContent = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & img {
        width: 180px;
        margin: 0 10%;
    }
`;

export const DescriptionColumnTexts = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const DescriptionColumnTitle = styled.h2`
    font-size: 40px;
    color: #FFF;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const DescriptionColumnText = styled.p`
    font-size: 15px;
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    width: 360px;
    line-height: 20px;
    margin-top: 10px;
`;

export const DescriptionColumnLink = styled.a`
    font-size: 14px;
    color: #FFF !important;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin-top: 15px;
`;

export const ImageColumn = styled.div`
    background: blue;
    height: 100%;
    width: 100%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;