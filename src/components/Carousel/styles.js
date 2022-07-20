import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    top: 100px;
    margin-bottom: 100px;
    height: calc(100vh - 100px);

    @media(max-width: 1199px) {
        height: calc(70vh - 100px);
    }

    @media(max-width: 763px) {
        height: calc(50vh - 100px);
    }

    @media(max-width: 575px) {
        height: 600px;
    }

    & .slide {
        height: calc(100vh - 100px);

        @media(max-width: 1199px) {
            height: calc(70vh - 100px);
        }

        @media(max-width: 763px) {
            height: calc(50vh - 100px);
        }

        @media(max-width: 575px) {
            height: 600px;
        }

        & div img {
            height: calc(100vh - 100px);
            object-fit: cover;

            @media(max-width: 1199px) {
                height: calc(70vh - 100px);
            }

            @media(max-width: 763px) {
                height: calc(50vh - 100px);
            }

            @media(max-width: 575px) {
                height: 600px;
            }
        }
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