import React from 'react';
import { IncrementButton } from './ButtonStyle';
const Button = ({ onClick, label }) => {
  return <IncrementButton onClick={onClick}>{label}</IncrementButton>;
};

export default Button;
