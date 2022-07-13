import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AdminContainer,
    Header,
    ItemsNavBox,
    LogoHeader,
    Container,
    Sidebar,
    PhotoUserBox,
    PhotoUser,
    NavMenu,
    ListMenuItems,
    ListItem,
    Content
} from './styles';
import {
    UserOutlined,
    ExportOutlined,
    HomeOutlined,
    CalendarOutlined,
    BankOutlined,
    FileDoneOutlined,
    EditOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import LogoHeaderImage from '../../../assets/images/crown-logo.png';
import PhotoUserExample from '../../../assets/images/photo-user-example.png';
import AuthService from '../../../services/auth';

export default ({ children }) => {
    useEffect(() => {
        const body = document.querySelector('body');

        if(body)
            body.classList.add('admin-body');
    }, []);

    const logout = () => {
        AuthService.Logout();
    };

    return (
        <AdminContainer>
            <Header>
                <LogoHeader src={LogoHeaderImage} />

                <ItemsNavBox>
                    <Link to="/admin/home">
                        <UserOutlined />
                    </Link>
                    <a href="javascript:void(0)" onClick={logout}>
                        <ExportOutlined/>
                    </a>
                </ItemsNavBox>
            </Header>

            <Container>
                <Sidebar>
                    <PhotoUserBox>
                        <PhotoUser src={PhotoUserExample} />
                        <p>Nome teste</p>
                    </PhotoUserBox>

                    <NavMenu>
                        <ListMenuItems>
                            <Link to="/admin/products">
                                <ListItem>
                                    <CalendarOutlined /> Produtos
                                </ListItem>
                            </Link>
                            <Link to="/admin/categories">
                                <ListItem>
                                    <CalendarOutlined /> Categorias
                                </ListItem>
                            </Link>
                            <Link to="/admin/banners">
                                <ListItem>
                                    <CalendarOutlined /> Banners
                                </ListItem>
                            </Link>
                        </ListMenuItems>
                    </NavMenu>
                </Sidebar>

                <Content>
                    { children }
                </Content>
            </Container>
        </AdminContainer>
    );
};