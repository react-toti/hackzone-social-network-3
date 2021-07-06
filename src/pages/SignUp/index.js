/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { Text3, Input, Button } from '../../components';

import connectedWorld from '../../assets/connectedWorld.png';

import { Container, PhrasesContainer, FormContainer } from './styles';

const SignUp = () => (
  <>
    <Container>
      <PhrasesContainer>
        <img src={connectedWorld} alt="Mundo conectado" />
      </PhrasesContainer>

      <FormContainer>
        <Input id="name" placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmação de senha" />
        <Button type="submit">Cadastrar</Button>
        <Text3 color="blue">Já tenho conta. Entrar.</Text3>
      </FormContainer>
    </Container>
  </>
);

export default SignUp;
