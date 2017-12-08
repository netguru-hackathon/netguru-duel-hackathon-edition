/* eslint-disable */
import React from 'react';
import { LeftBar, RightBar, BarContainter, OuterBar } from './styles.js'

const ScoreBar = ({ score }) => (
  <OuterBar>
    <BarContainter>
      <LeftBar length={score < 0 ? score : 0}></LeftBar>
    </BarContainter>
    <BarContainter>
      <RightBar length={score}></RightBar>
    </BarContainter>
  </OuterBar>
)

export default ScoreBar;
