import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Title1, Title2, Text3, Input, Button } from '../../components';

import { Container, PhrasesContainer, FormContainer } from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = () => {};
  return (
    <>
      <Container>
        <PhrasesContainer>
          <Title1 color="blue">A rede dos programadores</Title1>
          <Title2>Venha compartilhar conhecimento, código e café</Title2>
        </PhrasesContainer>

        <FormContainer onSubmit={() => handleForm()}>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <Button>Entrar</Button>
          <Text3 color="blue">Esqueceu sua senha?</Text3>
          <hr />
          <Link to="/signup">
            <Button buttonSize="small" buttonStyle="secondary">
              {' '}
              Criar conta{' '}
            </Button>
          </Link>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignIn;
