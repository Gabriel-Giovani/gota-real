import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    padding: 75px 125px;
`;

export const ColumnProductCategories = styled.div`
    height: 100%;
`;

export const ColumnProducts = styled.div`
    height: 100%;
`;

export const TitleColumnCategories = styled.div`
`;

export const SmallerText = styled.span`
    font-size: 13px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    color: #17292d;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const BiggerText = styled.h4`
    font-size: 70px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: -25px;
`;

export const CategoriesList = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`;

export const CategorieButton = styled.button`
    text-transform: uppercase;
    border-radius: 0;
    border: 1px solid #000;
    height: 50px;
    padding: 0 30px;
    background-color: #FFF;
    font-size: 13px;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        background-color: #000;
        color: #FFF;
    }

    &.-selected {
        background-color: #000;
        color: #FFF;
    }
`;