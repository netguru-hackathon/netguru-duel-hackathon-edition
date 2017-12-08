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

  componentDidMount() {
    this.startTime = new Date()
  }

  getFrequency = player => {
    const score = this.state[player];
    const endTime = new Date()
    return 1000/((endTime - this.startTime) / score);
  }

  handleGameOver = () => {
    const { onGameOver } = this.props;

    const player1 = this.state[PLAYER1];
    const player2 = this.state[PLAYER2];
    const isGameOver = Math.abs(this.state[PLAYER1] - this.state[PLAYER2]) === 20;

    if (isGameOver) {
      const winner = player1 > player2 ? PLAYER1 : PLAYER2;
      const frequency = this.getFrequency(winner);
      onGameOver({ winner, frequency });
    }
  }

  handleHit = hittingPlayer => () => {
    const { onGameOver } = this.props;

    this.setState(
      prevState => ({
        [hittingPlayer]: prevState[hittingPlayer] + 1,
      }),
      this.handleGameOver,
    );
  }

  render() {

    return (
      <Container>
        <HitButton onClick={this.handleHit(PLAYER1)}/>
        <Arena />
        <HitButton onClick={this.handleHit(PLAYER2)}/>
      </Container>
    );
  }
}

export default Game;
