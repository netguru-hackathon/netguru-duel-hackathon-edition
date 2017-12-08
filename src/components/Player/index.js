import styled from 'styled-components';
import wiktor from 'assets/img/wiktor.png';
import kuba from 'assets/img/kuba.png';

const images = {
  wiktor,
  kuba,
  default: 'http://via.placeholder.com/300.png/09f/fff',
};

const Player = styled.img.attrs({
  src: props => images[props.name] || images.default,
})`
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 200px;
  height: 200px;
`;

export default Player;
