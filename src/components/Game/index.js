import React, { Component } from 'react';

import Player from 'components/Player';
import HitButton from 'components/HitButton';

import { Container } from './styles';

class Game extends Component {
  render() {
    return (
      <Container>
        <HitButton />
        <Player name="wiktor" alt="player" />
        <Player name="wiktor" alt="player" />
        <HitButton />
      </Container>
    );
  }
}

export default Game;
