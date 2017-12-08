import styled from 'styled-components';

const HitButton = styled.button.attrs({
  children: ' ',
})`
  height: 80px;
  width: 80px;
  background-color: #fff;
  margin: 30px;
  border: 5px solid #48AE65;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    opacity: 0.8;
    background-color: #581845;
  }
`;

export default HitButton;
