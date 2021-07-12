/* eslint-disable */
import React, {useState, Component } from 'react';

import { Text3, Input, Button } from '../../components';
import axios from "axios"
import connectedWorld from '../../assets/connectedWorld.png';
import api from '../../services/api';

import { Container, PhrasesContainer, FormContainer } from './styles';






const SignUp = () => {

  const [datos, setDatos] = useState({
    name: '',
    email: '',
    password: ''
})

const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

const enviarDatos = (event) => {
    event.preventDefault()
    axios.post('https://60e4fd845bcbca001749ec13.mockapi.io/api/users', {
      name:datos.name,
      email:datos.email,
      password:datos.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

return (
  <>
    <Container>
      <PhrasesContainer>
        <img src={connectedWorld} alt="Mundo conectado" />
      </PhrasesContainer>

      <FormContainer onSubmit={enviarDatos}>
        <Input id="name" 
               name="name" 
               placeholder="Nome"
               onChange={handleInputChange} />
        <Input placeholder="Email"
               name="email"
               onChange={handleInputChange}
               />
        <Input placeholder="Senha"
               name="password"
               onChange={handleInputChange}
               />
        <Input placeholder="Confirmação de senha" />
        <Button type="submit">Cadastrar</Button>
        <Text3 color="blue">Já tenho conta. Entrar.</Text3>
      </FormContainer>
    </Container>
  </>
)};

export default SignUp;
