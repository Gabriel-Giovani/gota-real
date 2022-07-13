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
import RegisterCategoryModal from './RegisterCategoryModal';
import DeleteCategoryModal from './DeleteCategoryModal';

export default () => {
    const [categories, setCategories] = useState([]);
    const [visibleRegisterCategoryModal, setVisibleRegisterCategoryModal] = useState(false);
    const [visibleDeleteCategoryModal, setVisibleDeleteCategoryModal] = useState(false);
    const [onEdit, setOndit] = useState(false);
    const [editableCategory, setEditableCategory] = useState(null);
    const [deletedCategory, setDeletedCategory] = useState(null);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const reqData = await get('/categories/all');

        if(reqData)
            setCategories(reqData);
    };

    const createCategory = () => {
        setOndit(false);
        setVisibleRegisterCategoryModal(true);
    };

    const editCategory = (category) => {
        setOndit(true);
        setVisibleRegisterCategoryModal(true);
        setEditableCategory(category);
    };

    const openDeleteCategoryModal = (category) => {
        setDeletedCategory(category);
        setVisibleDeleteCategoryModal(true);
    };

    const deleteCategory = async () => {
        if(deletedCategory) {
            const req = await del(`/category/${deletedCategory.id}`);
    
            if(req) {
                message.success('Categoria removida com sucesso!');
                await getCategories();
                setVisibleDeleteCategoryModal(false);
            }
        }
    };

    const onSaveCategory = async () => {
        await getCategories();
        setVisibleRegisterCategoryModal(false);
    };

    return (
        <Container>
            <WelcomeTitle>BEM VINDO, Usuário</WelcomeTitle>

            <SubtitlePage>
                <p className="descrition-screen">Crie, edite ou exclua categorias de produtos abaixo:</p>

                <RegisterButton onClick={createCategory}>Cadastrar categoria</RegisterButton>
            </SubtitlePage>

            <ListWrapper>
                {
                    categories.length > 0 ?
                        categories.map((category, index) => (
                            <Card key={index} className="card-item">
                                <Row gutter={24}>
                                    <Col xs={24} sm={20} md={20} lg={20} xl={20} className='col-name'>
                                        <h3 className='name'>{ category.name }</h3>
                                    </Col>
                                    <Col xs={24} sm={4} md={4} lg={4} xl={4} className='col-actions'>
                                        <EditOutlined onClick={() => editCategory(category)} />
                                        <DeleteOutlined onClick={() => openDeleteCategoryModal(category)} />
                                    </Col>
                                </Row>
                            </Card>
                        ))
                    :
                        <EmptySpace
                            title='Nenhuma categoria por aqui...'
                            text='Cadastre novas categorias'
                            style={{ marginTop: '100px' }}
                        />
                }
            </ListWrapper>

            <RegisterCategoryModal
                visible={visibleRegisterCategoryModal}
                onCancel={() => setVisibleRegisterCategoryModal(false)}
                onConfirm={onSaveCategory}
                onEdit={onEdit}
                editableCategory={editableCategory}
            />

            <DeleteCategoryModal
                visible={visibleDeleteCategoryModal}
                onCancel={() => setVisibleDeleteCategoryModal(false)}
                onConfirm={deleteCategory}
                deletedCategory={deletedCategory}
            />
        </Container>
    );
}