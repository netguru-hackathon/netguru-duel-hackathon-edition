import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
`;

const Cta = styled.button`
  font-size: 28px;
`;

class Start extends Component {
  startGame = () => this.props.setStep('start');

  render() {
    return (
      <Container>
        <Title>#netguru-duel</Title>
        <Subtitle> extended edition</Subtitle>
        <Cta onClick={this.startGame}>Let's play</Cta>
      </Container>
    );
  }
}

export default Start;
