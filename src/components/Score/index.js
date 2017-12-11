import React, { Component } from 'react';
import { func } from 'prop-types';
import fire from 'fire';

import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 44px;
`;

const Subtitle = styled.h2`
  font-size: 30px;
  color: #aaa;
  margin: 20px 0;
`;

const Input = styled.input`
  font-size: 24px;
  color: #000;
  margin: 40px 0 80px;
  border: 0;
  border-bottom: 1px solid #48AE65;

  &:focus {
    outline: 0;
  }
`;

const Cta = styled.button`
  font-size: 24px;
  background-color: #581845;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 10px 60px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    opacity: 0.8;
  }
`;


class Score extends Component {
  onButtonClick = () => {
    fire.database().ref('highScores').push(this.score)
      .then(() => this.props.nextStep());
  };

  score = Math.floor(Math.random() * 10000);

  render() {
    return (
      <Container>
        <Title>Congratulations! You won!</Title>
        <Subtitle>Your score: {this.score}. Give us your name:</Subtitle>
        <Input />
        <Cta onClick={this.onButtonClick}>Proceed to the hall of fame</Cta>
      </Container>
    );
  }
}

Score.propTypes = {
  nextStep: func.isRequired,
};

export default Score;
