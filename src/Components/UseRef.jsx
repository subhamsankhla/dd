import React, { useRef } from 'react';

const UseRef = () => {
  let inputref = useRef(null);
  function handleInput() {
    inputref.current.value = '10000';
    inputref.current.style.color = 'red';
    inputref.current.focus();
  }
  return (
    <>
      <div className=' w-100 d-flex justify-content-center align-items-center flex-column'>
        <h1>useref in react</h1>
        <input
          style={{ border: '2px solid black' }}
          className="py-1 px-1 my-3"
          type="text"
          ref={inputref}
        />
        <button className=" py-1 px-3 btn-light rounded-2 ms-2" onClick={handleInput}>
          click
        </button>
      </div>
    </>
  );
};

export default UseRef;
