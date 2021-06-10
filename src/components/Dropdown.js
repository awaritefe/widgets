import React from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={ option.value } className={ items }>
        { option.label }
      </div>
    );
  });
  return <h1>Dropdown</h1>;
};

export default Dropdown; 