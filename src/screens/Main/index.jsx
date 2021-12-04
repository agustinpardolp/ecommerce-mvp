import React from 'react';
import Navbar from '../../components/Navbar';
import MainRouter from '../../routes';
import { StyledMain } from './styled-components';

const Main = () => (
  <StyledMain>
    <Navbar />
    <MainRouter />
  </StyledMain>
);

export default Main;
