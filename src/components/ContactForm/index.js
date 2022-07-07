import React from 'react';
import {
    Container,
    ContactTitle,
    ContactItem,
    ContactIcon,
    ContactDetails,
    ContactDetailsBiggerText,
    ContactDetailsSmallerText,
    ContainerForm
} from './styles';
import { Row, Col, Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Container>
            <ContactTitle>Contato</ContactTitle>

            <Row gutter={24}>
                <Col span={8}>
                    <ContactItem>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </ContactIcon>
                        <ContactDetails>
                            <ContactDetailsBiggerText>E-mail</ContactDetailsBiggerText>
                            <ContactDetailsSmallerText>contato@gmail.com</ContactDetailsSmallerText>
                        </ContactDetails>
                    </ContactItem>
                </Col>
                <Col span={8}>
                    <ContactItem>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faPhone} />
                        </ContactIcon>
                        <ContactDetails>
                            <ContactDetailsBiggerText>Telefone</ContactDetailsBiggerText>
                            <ContactDetailsSmallerText>(015) 3754 - 3010</ContactDetailsSmallerText>
                        </ContactDetails>
                    </ContactItem>
                </Col>
                <Col span={8}>
                    <ContactItem>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </ContactIcon>
                        <ContactDetails>
                            <ContactDetailsBiggerText>Endereço</ContactDetailsBiggerText>
                            <ContactDetailsSmallerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ContactDetailsSmallerText>
                        </ContactDetails>
                    </ContactItem>
                </Col>
            </Row>

            <ContainerForm>
                <Form>
                    <Row gutter={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Col span={11}>
                            <Input
                                placeholder='Seu nome'
                            />
                        </Col>
                        <Col span={11}>
                            <Input
                                placeholder='Seu Email'
                            />
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Input
                            placeholder='Seja um cliente'
                        />
                    </Row>
                    <Row gutter={24}>
                        <Input.TextArea
                            placeholder='Sua Mensagem'
                            rows={8}
                        />
                    </Row>
                    <Row gutter={24}>
                        <Button>Enviar mensagem</Button>
                    </Row>
                </Form>
            </ContainerForm>
        </Container>
    );
}