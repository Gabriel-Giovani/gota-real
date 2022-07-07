import React from 'react';
import { HeaderMenu, Logo, NavItem, NavList } from './styles';
import LogoHeader from '../../assets/images/logo-header.png';

export default () => {
    return (
        <HeaderMenu>
            <Logo src={LogoHeader}/>

            <NavList>
                <NavItem>Home</NavItem>
                <NavItem>Produtos</NavItem>
                <NavItem>Sobre</NavItem>
                <NavItem>Contato</NavItem>
            </NavList>
        </HeaderMenu>
    );
}