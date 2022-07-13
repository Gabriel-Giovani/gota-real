import React, { useEffect, useState } from 'react';
import {
    Container,
    WelcomeTitle,
    SubtitlePage,
    RegisterButton,
    ListWrapper
} from './styles';
import { Row, Col, Card, message } from 'antd';
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import { del, get } from '../../../services/api';
import EmptySpace from '../../../components/EmptySpace';
import RegisterProductModal from './RegisterProductModal';
import DeleteProductModal from './DeleteProductModal';

export default () => {
    const [products, setProducts] = useState([]);
    const [visibleRegisterProductModal, setVisibleRegisterProductModal] = useState(false);
    const [visibleDeleteProductModal, setVisibleDeleteProductModal] = useState(false);
    const [onEdit, setOndit] = useState(false);
    const [editableProduct, setEditableProduct] = useState(null);
    const [deletedProduct, setDeletedProduct] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const reqData = await get('/products/all');

        if(reqData)
            setProducts(reqData);
    };

    const createProduct = () => {
        setOndit(false);
        setVisibleRegisterProductModal(true);
    };

    const editProduct = (product) => {
        setOndit(true);
        setVisibleRegisterProductModal(true);
        setEditableProduct(product);
    };

    const openDeleteProductModal = (product) => {
        setDeletedProduct(product);
        setVisibleDeleteProductModal(true);
    };

    const deleteProduct = async () => {
        if(deletedProduct) {
            const req = await del(`/product/${deletedProduct.id}`);
    
            if(req) {
                message.success('Produto removido com sucesso!');
                await getProducts();
                setVisibleDeleteProductModal(false);
            }
        }
    };

    const onSaveProduct = async () => {
        await getProducts();
        setVisibleRegisterProductModal(false);
    };

    return (
        <Container>
            <WelcomeTitle>BEM VINDO, Usuário</WelcomeTitle>

            <SubtitlePage>
                <p className="descrition-screen">Crie, edite ou exclua produtos abaixo:</p>

                <RegisterButton onClick={createProduct}>Cadastrar produto</RegisterButton>
            </SubtitlePage>

            <ListWrapper>
                {
                    products.length > 0 ?
                        products.map((product, index) => (
                            <Card key={index} className="card-item">
                                <Row gutter={24}>
                                    <Col xs={24} sm={4} md={4} lg={4} xl={4} className='col-photo'>
                                        <img className='photo' src={product.photo} />
                                    </Col>
                                    <Col xs={24} sm={16} md={16} lg={16} xl={16} className='col-name'>
                                        <h3 className='name'>{ product.name }</h3>
                                    </Col>
                                    <Col xs={24} sm={4} md={4} lg={4} xl={4} className='col-actions'>
                                        <EditOutlined onClick={() => editProduct(product)} />
                                        <DeleteOutlined onClick={() => openDeleteProductModal(product)} />
                                    </Col>
                                </Row>
                            </Card>
                        ))
                    :
                        <EmptySpace
                            title='Nenhum produto por aqui...'
                            text='Cadastre novos produtos'
                            style={{ marginTop: '100px' }}
                        />
                }
            </ListWrapper>

            <RegisterProductModal
                visible={visibleRegisterProductModal}
                onCancel={() => setVisibleRegisterProductModal(false)}
                onConfirm={onSaveProduct}
                onEdit={onEdit}
                editableProduct={editableProduct}
            />

            <DeleteProductModal
                visible={visibleDeleteProductModal}
                onCancel={() => setVisibleDeleteProductModal(false)}
                onConfirm={deleteProduct}
                deletedProduct={deletedProduct}
            />
        </Container>
    );
};