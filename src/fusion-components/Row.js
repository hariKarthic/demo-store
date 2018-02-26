import React from 'react';
import { css } from 'emotion';

const rowStyle = css`
  display: flex;
  background: #000;
  color: #fff;
  min-height:60px;
  align-items:center;
  justify-content:center;
`;

const Row = ({children}) => <div className={rowStyle} >{children}</div>;

export default Row;
