import React, { useState, useEffect } from 'react';
import { fetchMode } from './gateWay';
import Select from './Select.jsx';

const Section = () => {
  const [position, setPosition] = useState([]);

  const [isOpen, setIsOpen] = useState([]);

  const [mode, setMode] = useState({});

  const handleMouseOver = event => {
    setPosition([...position, { row: event.currentTarget.className, col: event.target.className }]);

    const bgColor =
      event.target.style.backgroundColor === 'white'
        ? (event.target.style.backgroundColor = '#03A8F4')
        : (event.target.style.backgroundColor = 'white');
    return bgColor;
  };

  useEffect(() => {
    fetchMode().then(res => {
      setMode(res);
    });
  }, []);

  return (
    <>
      <Select mode={mode} setIsOpen={setIsOpen} setPosition={setPosition} position={position} />
      <table className="section">
        <tbody className="table">
          {isOpen.map((el, indx) => (
            <tr onMouseOver={handleMouseOver} className={`row ${indx + 1}`} key={el + indx}>
              {isOpen.map((elem, index) => (
                <td
                  className={`col ${index + 1} `}
                  key={index}
                  style={{ backgroundColor: 'white' }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Section;
