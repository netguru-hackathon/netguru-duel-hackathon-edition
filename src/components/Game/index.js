import React, { Component } from 'react';

import HitButton from 'components/HitButton';
import Arena from 'components/Arena';

import { Container } from './styles';

class Game extends Component {
  render() {
    return (
      <Container>
        <HitButton />
          <Arena />
        <HitButton />
      </Container>
    );
  }
}

export default Game;
