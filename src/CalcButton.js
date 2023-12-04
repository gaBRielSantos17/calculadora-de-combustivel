// CalcButton.js
import React from 'react';

const CalcButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CalcButton;
