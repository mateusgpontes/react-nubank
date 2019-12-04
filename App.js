import React from 'react';
import {StatusBar} from 'react-native';

import './src/config/ReactotronConfig';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8a05be" />
      <Routes />
    </>
  );
};

export default App;
