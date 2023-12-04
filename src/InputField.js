// InputField.js
import React from 'react';

const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
