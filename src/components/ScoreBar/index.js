import React from 'react';
import { LeftBar, RightBar, BarContainter, OuterBar } from './styles';

const ScoreBar = ({ score }) => (
  <OuterBar>
    <BarContainter>
      <LeftBar length={score < 0 ? score : 0} />
    </BarContainter>
    <BarContainter>
      <RightBar length={score} />
    </BarContainter>
  </OuterBar>
);

export default ScoreBar;
