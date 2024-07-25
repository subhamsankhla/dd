'use client';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { globelContext } from '../App';

const NameChange = () => {
  const { appColor } = useContext(globelContext);
  console.log(appColor, 'jfsjkfslak');
  const [name, setName] = useState('subham');
  function names() {
    if (name == 'subham') {
      setName('rinki');
    } else if (name == 'rinki') {
      setName('ankita');
    } else if (name == 'ankita') {
      setName('mamta');
    } else {
      setName('subham');
    }
  }
  useEffect(() => {
    names();
  }, []);
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center my-5">
        <h1>
          my name is <span style={{ color: appColor }}>{name}</span>
        </h1>
        <button
          className=" bg-danger-subtle py-2 px-4 rounded-4 fs-5 fw-bolder mt-3"
          onClick={names}>
          ChangeName
        </button>
      </div>
    </>
  );
};

export default NameChange;
