import React from 'react';

const Child = (props) => {
  return (
    <div>
      <p className=" fs-4 text-white fw-medium">Count : {props.count}</p>
      <button className=" fs-4 bg-light rounded-3 py-2 px-3 mx-2" onClick={props.increment}>
        Increment
      </button>
      <button className=" fs-4 bg-light rounded-3 py-2 px-3 mx-2" onClick={props.decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Child;


