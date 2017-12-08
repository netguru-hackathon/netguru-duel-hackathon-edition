import styled from 'styled-components';

const LeftBar = styled.div`
  display: inline-block;
  background: orange;
  height: 40px;
  width: ${props => Math.abs(props.length * 5)}%;
`;

const RightBar = styled.div`
  display: inline-block;
  background: red;
  height: 40px;
  width: ${props => props.length * 5}%;
`;

const BarContainter = styled.div`
  width: 50%;
  &:first-child {
    text-align: right;
  }
`;

const OuterBar = styled.div`
  background: green;
  width: 80%;
  display: flex;
`;

export { RightBar, LeftBar, BarContainter, OuterBar };
