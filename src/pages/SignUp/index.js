/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text3, Input, Button } from '../../components';

import connectedWorld from '../../assets/connectedWorld.png';

import { Container, PhrasesContainer, FormContainer } from './styles';

const SignUp = () => {
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

  const onSubmit = value => {
    console.log(value);
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
          onSubmit={values => console.log(values)}
        >
          <FormContainer>
            <Input name="name" type="text" placeholder="Nome" />
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
