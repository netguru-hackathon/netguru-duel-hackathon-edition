import React from 'react';
import { func } from 'prop-types';
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

const Subtitle = styled.h3`
  font-size: 24px;
  color: #aaa;
  margin: 0 0 80px;
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

const Start = ({ nextStep }) => (
  <Container>
    <Title>#netguru-duel</Title>
    <Subtitle> extended edition</Subtitle>
    <Cta onClick={nextStep}>Let&lsquo;s play</Cta>
  </Container>
);

Start.propTypes = {
  nextStep: func.isRequired,
};

export default Start;
