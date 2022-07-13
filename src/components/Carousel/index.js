import React, { useEffect, useState } from 'react';
import { Carousel, Radio } from 'antd';
import { CarouselContainer, CarouselItem, CarouselSocialLinks } from './styles';
import CarouselImageExample from '../../assets/images/carousel-image-example.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { get } from '../../services/api';

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
        <>
            <CarouselContainer>
                <Carousel dotPosition='left'>
                    {
                        banners.length > 0 &&
                            banners.map((banner, index) => (
                                <div key={index}>
                                    <CarouselItem>
                                        <img src={banner.photo} />
                                    </CarouselItem>
                                </div>
                            ))
                    }
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
        </>
    );
}