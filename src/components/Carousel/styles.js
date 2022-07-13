import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    height: calc(100vh - 100px);

    > .ant-carousel {
        height: 100%;
    }

    & .slick-dots li {
        width: 15px !important;
        height: 15px !important;
        border-radius: 100% !important;
        margin: 12px 2px;

        & button {
            width: 100% !important;
            height: 100% !important;
            border-radius: 100% !important;
        }
    }

    /* @media(max-width: 991px) {
        max-height: 500px;
    } */
`;

export const CarouselItem = styled.div`
    height: calc(100vh - 100px);
    line-height: calc(100vh - 100px);

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        /* @media(max-width: 991px) {
            max-height: 500px;
        } */
    }
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