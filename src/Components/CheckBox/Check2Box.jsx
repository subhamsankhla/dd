import React, { useState } from 'react';

const Check2Box = () => {
  const [first, setfirst] = useState(true);
  return (
    <div>
      <div className=" d-flex flex-column justify-content-center align-items-center bg-body-tertiary rounded-4 p-4  mt-5 w-25 m-auto">
        <label htmlFor="">on</label>
        <input onChange={() => setfirst(true)} checked={first === true} type="checkbox" /> <br />
        <label htmlFor="">of</label>
        <input onChange={() => setfirst(false)} checked={first === false} type="checkbox" /> <br />
      </div>
    </div>
  );
};

export default Check2Box;
