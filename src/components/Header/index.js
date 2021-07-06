import React from 'react';

import { Container } from './styles';
import logoGroup from '../../assets/logogroup.png';

const Header = () => (
  <Container>
    <img src={logoGroup} alt="Logo" />
  </Container>
);

export default Header;
