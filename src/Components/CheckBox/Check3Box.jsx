import React, { useState } from 'react';

const Check3Box = () => {
  const [check, setCheck] = useState('Live');
  return (
    <div>
      <div className=" d-flex flex-column justify-content-center align-items-center bg-body-tertiary rounded-4 p-4  mt-5 w-25 m-auto">
        <label htmlFor="">on</label>
        <input onChange={() => setCheck('On')} checked={check === 'On'} type="checkbox" /> <br />
        <label htmlFor="">of</label>
        <input onChange={() => setCheck('Off')} checked={check === 'Off'} type="checkbox" /> <br />
        <label htmlFor="">defult</label>
        <input onChange={() => setCheck('Live')} checked={check === 'Live'} type="checkbox" />{' '}
        <br />
      </div>
    </div>
  );
};

export default Check3Box;
