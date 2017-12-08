import React, { Component } from 'react';

import HitButton from 'components/HitButton';
import Arena from 'components/Arena';

import { Container } from './styles';

const PLAYER1 = '1';
const PLAYER2 = '2';

class Game extends Component {
  state = {
    [PLAYER1]: 0,
    [PLAYER2]: 0,
  }


  onHit = hittingPlayer => () => {
    const { onGameOver } = this.props;

    this.setState(
      prevState => ({
        [hittingPlayer]: prevState[hittingPlayer] + 1,
      }),
      () => Math.abs(this.state[PLAYER1] - this.state[PLAYER2]) === 20 && onGameOver(hittingPlayer),
    );
  }

  render() {

    return (
      <Container>
        <HitButton onClick={this.onHit(PLAYER1)}/>
        <Arena />
        <HitButton onClick={this.onHit(PLAYER2)}/>
      </Container>
    );
  }
}

export default Game;
