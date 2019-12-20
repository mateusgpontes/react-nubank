import React from 'react';

import Header from '../../components/Main/Header';
import Tabs from '../../components/Main/Tabs';

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
