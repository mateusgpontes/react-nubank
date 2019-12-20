import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import {Container} from './styled';

function Main() {
  return (
    <>
      <Container>
        <Header />
        <Tabs />
      </Container>
    </>
  );
}

export default Main;
