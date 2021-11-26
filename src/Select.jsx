import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({ setIsOpen, setPosition, mode, position }) => {
  const [selectedMode, setSelectedMode] = useState([]);

  const { easyMode, normalMode, hardMode } = mode;

  const handleChange = event => {
    const coppyArray = [...selectedMode];
    coppyArray.length = event.target.value;
    coppyArray.fill('');
    setSelectedMode(coppyArray);
  };

  const handleClick = () => {
    setIsOpen(selectedMode);
    setPosition([]);
  };
  const showCroll = position.length === 0 ? null : { overflow: 'scroll' };

  return (
    <>
      <div className="position" style={showCroll}>
        <header className="position-header">Hover squares</header>
        {position.map(({ row, col }, indexNumber) => (
          <span className="position-item" key={indexNumber}>
            {row} {col}
          </span>
        ))}
      </div>
      <div className="nav-items">
        <select className="nav-items_select" onChange={handleChange}>
          <option className="select-option" hidden>
            Pick Mode
          </option>
          <option className="select-option" value={easyMode?.field}>
            Easy mode
          </option>
          <option className="select-option" value={normalMode?.field}>
            Normal mode
          </option>
          <option className="select-option" value={hardMode?.field}>
            Hard mode
          </option>
        </select>
        <button className="btn" onClick={handleClick}>
          Start
        </button>
      </div>
    </>
  );
};

Select.propTypes = {
  setIsOpen: PropTypes.func,
  setPosition: PropTypes.func,
  mode: PropTypes.object,
  position: PropTypes.array,
};

export default Select;
