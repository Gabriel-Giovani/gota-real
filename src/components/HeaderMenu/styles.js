import styled from "styled-components";

export const HeaderMenu = styled.nav`
    position: fixed;
    z-index: 9;
    height: 100px;
    width: 100%;
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media(max-width: 575px) {
        padding: 0 20px;
    }
`;

export const Logo = styled.img`
    width: 350px;

    @media(max-width: 575px) {
        width: 200px;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    width: fit-content;
    padding: 0;
    gap: 70px;
    margin: 0;
    position: absolute;
    right: 70px;

    @media(max-width: 991px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    color: #6c6c6c;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 3px;
    font-family: 'Open Sans', sans-serif;
`;

export const RetiringMenu = styled.div`
    display: none;
    position: absolute;
    right: 40px;
    cursor: pointer;

    @media(max-width: 991px) {
        display: block;
    }
`;

export const RetiringMenuLine = styled.div`
    width: 30px;
    height: 4px;
    background-color: #313131;
    margin-bottom: 4px;
`;

export const MenuDropdown = styled.div`
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: visibility .3s ease, opacity .2s ease;

    &.-visible {
        visibility: visible;
        opacity: 1;
    }
`;

export const NavListDropdown = styled.ul`
    background-color: #181818;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 9;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    gap: 40px;
    margin: 0;
`;