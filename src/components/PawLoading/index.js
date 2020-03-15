import React from 'react';

import { Container, Paw, MetaPad, DigiPad } from './styles';

export default function PawLoading() {
  return (
    <Container>
      <Paw>
        <DigiPad />
        <DigiPad />
        <DigiPad />
        <DigiPad />
        <MetaPad />
      </Paw>
      <Paw>
        <DigiPad />
        <DigiPad />
        <DigiPad />
        <DigiPad />
        <MetaPad />
      </Paw>
    </Container>
  );
}
