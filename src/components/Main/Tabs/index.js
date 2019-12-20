import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabsItem, TabsText} from './styled';

export default function Header() {
  const optionsList = [
    {
      id: 1,
      title: 'Indicar amigos',
      icon: 'person-add',
    },
    {
      id: 2,
      title: 'Cobrar',
      icon: 'chat-bubble-outline',
    },
    {
      id: 3,
      title: 'Depositar',
      icon: 'arrow-downward',
    },
    {
      id: 4,
      title: 'Transferir',
      icon: 'arrow-upward',
    },
    {
      id: 5,
      title: 'Bloquear cartão',
      icon: 'lock',
    },
  ];

  const [options, setOptions] = useState(optionsList);

  const showList = list => {
    return list.map(data => {
      return (
        <TabsItem key={data.id}>
          <Icon name={data.icon} size={24} color="#fff" />
          <TabsText>{data.title}</TabsText>
        </TabsItem>
      );
    });
  };

  return (
    <Container>
      <TabsContainer>{showList(options)}</TabsContainer>
    </Container>
  );
}
