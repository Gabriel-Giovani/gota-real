import styled from "styled-components";

export const HeaderMenu = styled.nav`
    height: 100px;
    width: 100%;
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 70px;
`;

export const Logo = styled.img`
    width: 350px;
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    width: fit-content;
    padding: 0;
    gap: 70px;
    margin: 0;
`;

export const NavItem = styled.li`
    color: #6c6c6c;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 3px;
    font-family: 'Open Sans', sans-serif;
`;