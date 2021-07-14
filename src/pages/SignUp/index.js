/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text3, Input, Button } from '../../components';

import api from '../../services/api';
import connectedWorld from '../../assets/connectedWorld.png';

import { Container, PhrasesContainer, FormContainer } from './styles';

const SignUp = () => {
  // 1. Depois que o form é submetido:
  //      Limpar todos os valores
  // 2. Se o status for 201
  //      Redirecionar para a rota de Dashboard
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const scheme = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Muito curto')
      .max(50, 'Muito longo')
      .required('Nome obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'Senha muito curta, precisa ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Senhas devem ser iguais',
    ),
  });

  const onSubmit = async values => {
    const response = await api.post('/access', { values });
    console.log(response);
  };

  return (
    <>
      <Container>
        {/* <PhrasesContainer>
        <img src={connectedWorld} alt="Mundo conectado" />
      </PhrasesContainer> */}
        <Formik
          initialValues={initialValues}
          validationSchema={scheme}
          onSubmit={onSubmit}
        >
          <FormContainer>
            <Input id="name" name="name" type="text" placeholder="Nome" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Senha" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmação de senha"
            />
            <Button type="submit">Cadastrar</Button>
            <Text3 color="blue">Já tenho conta. Entrar.</Text3>
          </FormContainer>
        </Formik>
      </Container>
    </>
  );
};

export default SignUp;
