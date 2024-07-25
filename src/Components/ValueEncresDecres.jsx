'use client';
import { useEffect, useState } from 'react';

const ValueEncresDecres = () => {
  const [num, setNum] = useState(0);

  const encrement = () => {
    setNum(num + 1);
    console.log(num);
  };
  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
      console.log(num);
    }
  };
  const ten = () => {
    setNum(num + 10);
    console.log(num);
  };
  useEffect(() => {
    console.log('hwllofmvjkajnv');
  }, [num]);
  return (
    <>
      <div className=" d-flex flex-column justify-content-center m-auto align-items-center bg-body-secondary d-inline-block p-5 d-inline w-50 mt-5 rounded-4">
        <button className=" bg-info text-white py-2 px-4 rounded-4 mb-3" onClick={encrement}>
          encrement
        </button>
        <h1>{num}</h1>
        <button className=" bg-info text-white py-2 px-4 rounded-4 mt-3" onClick={decrement}>
          decrement
        </button>
        <button className=" mt-5 bg-danger text-white py-2 px-4 rounded-4 mx-4" onClick={ten}>
          Ten
        </button>
      </div>
    </>
  );
};

export default ValueEncresDecres;
