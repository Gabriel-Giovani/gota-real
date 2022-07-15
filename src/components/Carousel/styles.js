import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    top: 100px;
    margin-bottom: 100px;
`;

export const CarouselSocialLinks = styled.div`
    width: 50px;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    position: fixed;
    padding: 10px 0;
    right: 0;
    top: 40%;
    z-index: 8;

    & svg {
        font-size: 16px;
        color: #B3B3B3;
        opacity: .7;
        transition: .2s ease;

        &:hover {
            opacity: 1;
        }
    }
`;