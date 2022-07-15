import React, { useEffect, useState } from 'react';
// import { Carousel, Radio } from 'antd';
import { CarouselContainer, CarouselItem, CarouselSocialLinks } from './styles';
import CarouselImageExample from '../../assets/images/carousel-image-example.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { get } from '../../services/api';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        getAllBanners();
    }, []);

    const getAllBanners = async () => {
        const reqData = await get('/banners/all');

        if(reqData)
            setBanners(reqData);
    };

    return (
        <CarouselContainer id="home">
            <Carousel
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                autoPlay
            >
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
                <div>
                    <img src={CarouselImageExample} />
                </div>
            </Carousel>

            <CarouselSocialLinks>
                <a href='#'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='#'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href='#'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </CarouselSocialLinks>
        </CarouselContainer>
    );
}