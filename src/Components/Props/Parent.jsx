import React, { useState } from 'react';
import Child from '../Props/Child';

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className=" bg-info py-5 rounded-4 text-center w-50 m-auto">
        <Child count={count} increment={increment} decrement={decrement} />
      </div>
    </>
  );
};

export default Parent;


