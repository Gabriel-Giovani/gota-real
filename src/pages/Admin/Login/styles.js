import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .input-form {
        height: 50px;
        width: 300px;
        margin-bottom: 20px;
        border-radius: 4px;
    }

    & form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    width: 100px;
    margin-bottom: 30px;
`;

export const FormTitle = styled.h2`
    margin-bottom: 30px;
`;

export const ButtonLogin = styled.button`
    width: 300px;
    height: 40px;
    background-color: #4081EC;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;