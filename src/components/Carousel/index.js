import React from 'react';
import { Carousel, Radio } from 'antd';
import { CarouselContainer, CarouselItem, CarouselSocialLinks } from './styles';
import CarouselImageExample from '../../assets/images/carousel-image-example.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default () => {
    return (
        <>
            <CarouselContainer>
                <Carousel autoplay dotPosition='left'>
                    <div>
                        <CarouselItem>
                            <img src={CarouselImageExample} />
                        </CarouselItem>
                    </div>
                    <div>
                        <CarouselItem>
                            <img src={CarouselImageExample} />
                        </CarouselItem>
                    </div>
                    <div>
                        <CarouselItem>
                            <img src={CarouselImageExample} />
                        </CarouselItem>
                    </div>
                    <div>
                        <CarouselItem>
                            <img src={CarouselImageExample} />
                        </CarouselItem>
                    </div>
                </Carousel>

                <CarouselSocialLinks>
                    <a href=''>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href=''>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href=''>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </CarouselSocialLinks>
            </CarouselContainer>
        </>
    );
}