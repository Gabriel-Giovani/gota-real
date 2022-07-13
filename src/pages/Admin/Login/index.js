import React, { useEffect, useState } from 'react';
import {
    Container,
    Logo,
    FormTitle,
    ButtonLogin
} from './styles';
import { Form, Input } from 'antd';
import LogoTitle from '../../../assets/images/crown-logo.png';
import { post } from '../../../services/api';
import AuthService from '../../../services/auth';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const sendFormData = async () => {
        const fromBody = { username, password };
        const req = await post('/login', fromBody);

        if(req) {
            AuthService.Login(req);
        }
    };

    return (
        <Container>
            <Logo src={LogoTitle} />
            <FormTitle>Login</FormTitle>

            <Form>
                <Input
                    placeholder='Username'
                    className='input-form'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input.Password
                    placeholder='Senha'
                    className='input-form'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ButtonLogin onClick={sendFormData}>Entrar</ButtonLogin>
            </Form>
        </Container>
    );
};