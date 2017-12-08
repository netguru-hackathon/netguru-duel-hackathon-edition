import React, { Component } from 'react';
import styled from 'styled-components';

const images = {
  wiktor: '',
  kuba: '',
  kasia: '',
  default: 'http://via.placeholder.com/300.png/09f/fff',
};

const Player = styled.img.attrs({
  src: props => images[props.name] || images.default,
})`
  border-radius: 50%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
`;

export default Player;
