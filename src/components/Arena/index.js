import React from 'react';

import Player from 'components/Player';

import { Container } from './styles';

const Arena = () => (
  <Container>
    <Player name="wiktor" alt="player" />
    <Player name="kuba" alt="player" />
  </Container>
);

export default Arena;
