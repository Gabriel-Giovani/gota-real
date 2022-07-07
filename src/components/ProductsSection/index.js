import React from 'react';
import { BiggerText, CategorieButton, CategoriesList, ColumnProductCategories, ColumnProducts, Container, SmallerText, TitleColumnCategories } from './styles';
import { Row, Col, Divider } from 'antd';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductImageExample from '../../assets/images/product-example.png';

export default () => {
    return (
        <Container>
            <Row gutter={24} style={{ height: '100%' }}>
                <Col span={9} style={{ height: '100%' }}>
                    <ColumnProductCategories>
                        <TitleColumnCategories>
                            <SmallerText>Destaque</SmallerText>
                            <BiggerText>Produtos</BiggerText>
                            <div style={{ width: '40%' }}>
                                <Divider style={{ color: '#000', borderTop: '1px solid #000' }} />
                            </div>
                        </TitleColumnCategories>

                        <CategoriesList>
                            <CategorieButton className='-selected'>Pão</CategorieButton>
                            <CategorieButton>Artesanais</CategorieButton>
                            <CategorieButton>Doces</CategorieButton>
                            <CategorieButton>Salgadinhos</CategorieButton>
                            <CategorieButton>Polvilhos</CategorieButton>
                            <CategorieButton>Batatas</CategorieButton>
                            <CategorieButton>Amendoins</CategorieButton>
                            <CategorieButton>Outros</CategorieButton>
                        </CategoriesList>
                    </ColumnProductCategories>
                </Col>
                <Col span={15} style={{ height: '100%' }}>
                    <ColumnProducts>
                        <OwlCarousel
                            className='owl-theme'
                            items='2'
                            autoplay
                            dots={false}
                            margin={20}
                            autoplayTimeout={5000}
                            style={{ marginBottom: '20px' }}
                        >
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                        </OwlCarousel>
                        <OwlCarousel
                            className='owl-theme'
                            items='2'
                            autoplay
                            dots={false}
                            margin={20}
                            autoplayTimeout={6000}
                        >
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                            <div className='item'>
                                <img src={ProductImageExample} />
                            </div>
                        </OwlCarousel>
                    </ColumnProducts>
                </Col>
            </Row>
        </Container>
    );
}