import React, { useState } from 'react';
import { HeaderMenu, Logo, NavItem, NavList, RetiringMenu, RetiringMenuLine, MenuDropdown, NavListDropdown } from './styles';
import LogoHeader from '../../assets/images/logo-header.png';

export default () => {
    const [visibleMenuDropdown, setVisibleMenuDropdown] = useState(false);

    return (
        <HeaderMenu>
            <Logo src={LogoHeader}/>

            <NavList>
                <NavItem><a href="#">Home</a></NavItem>
                <NavItem><a href="#">Produtos</a></NavItem>
                <NavItem><a href="#">Sobre</a></NavItem>
                <NavItem><a href="#">Contato</a></NavItem>
            </NavList>

            <RetiringMenu onClick={() => setVisibleMenuDropdown(!visibleMenuDropdown)}>
                <RetiringMenuLine />
                <RetiringMenuLine />
                <RetiringMenuLine />
            </RetiringMenu>

            <MenuDropdown style={{ display: visibleMenuDropdown ? 'block' : 'none' }}>
                <NavListDropdown>
                    <NavItem><a href="#">Home</a></NavItem>
                    <NavItem><a href="#">Produtos</a></NavItem>
                    <NavItem><a href="#">Sobre</a></NavItem>
                    <NavItem><a href="#">Contato</a></NavItem>
                </NavListDropdown>
            </MenuDropdown>
        </HeaderMenu>
    );
}