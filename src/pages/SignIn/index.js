import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Title1, Title2, Text3, Input, Button } from '../../components';

import { Container, PhrasesContainer, FormContainer } from './styles';

const SignIn = () => {
  // 1. Tem que transformar em um formik
  // 2. Mockapi, criar um resource de signin
  // 3. Contectar o onSubmit do forms com a mock api
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
        <Formik>
          <FormContainer onSubmit={() => handleForm()}>
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Senha" />
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
        </Formik>
      </Container>
    </>
  );
};

export default SignIn;
