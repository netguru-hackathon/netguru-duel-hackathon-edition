import React from 'react';
import { number } from 'prop-types';
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

ScoreBar.propTypes = {
  score: number.isRequired,
};

export default ScoreBar;
