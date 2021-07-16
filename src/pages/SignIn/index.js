import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Title1, Title2, Text3, Input, Button } from '../../components';
import api from '../../services/api';

import { Container, PhrasesContainer, FormContainer } from './styles';

const SignIn = props => {
  // 1. Tem que transformar em um formik
  // 2. Mockapi, criar um resource de signin
  // 3. Contectar o onSubmit do forms com a mock api

  const initialValues = {
    email: '',
    password: '',
  };

  const scheme = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
  });

  const onSubmit = async (values, resetForm) => {
    const response = await api.post('/access', { values });
    if (response.status === 200) {
      resetForm({ values: '' });
      props.history.push('/dashboard');
    }
  };
  return (
    <>
      <Container>
        <PhrasesContainer>
          <Title1 color="blue">A rede dos programadores</Title1>
          <Title2>Venha compartilhar conhecimento, código e café</Title2>
        </PhrasesContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={scheme}
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
        >
          <FormContainer>
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
