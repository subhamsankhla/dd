import React, { useRef } from 'react';

const ChekBox = () => {
  const checkbox1 = useRef(null);
  const checkbox2 = useRef(null);

  function handleInput(e) {
    if (e.target === checkbox1.current) {
      checkbox2.current.checked = !checkbox1.current.checked;
    } else if (e.target === checkbox2.current) {
      checkbox1.current.checked = !checkbox2.current.checked;
    }
  }

  return (
    <div>
      <div className=' d-flex justify-content-center align-items-center mt-5'>
        <input type="checkbox" ref={checkbox1} onChange={handleInput} />
        <input type="checkbox" ref={checkbox2} onChange={handleInput} />
      </div>
    </div>
  );
};

export default ChekBox;
