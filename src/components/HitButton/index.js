import styled from 'styled-components';

const HitButton = styled.button.attrs({
  children: 'X',
})`
  border: 10px dashed red;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  color: red;
  font-size: 60px;
`;

export default HitButton;
