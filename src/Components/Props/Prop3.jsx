import React from 'react';

const Prop3 = (props) => {
  // const handleClick = () => {
  //   if (props.fname === 'subham') {
  //     props.setname('rinki');
  //   } else if (props.fname === 'rinki') {
  //     props.setname('subham');
  //   }
  // };
  // const handleClick=()=>{
  //   props.fname=="subham"?props.setname("rinki"):props.fname==="rinki"?props.setname("subham"):""
  // }

  return (
    <div className=' bg-dark w-25 rounded-4 p-5 m-auto d-flex flex-column justify-content-center align-items-center mt-5'>
      <p className=' fs-4 fw-bolder text-white'>name  : {props.fname}</p>
      {/* <button onClick={handleClick}>click</button> */}
      <button
        className=" fs-4 bg-light rounded-3 py-2 px-3 mx-2"
        onClick={() =>
          props.fname == 'subham'
            ? props.setname('rinki')
            : props.fname === 'rinki'
            ? props.setname('subham')
            : ''
        }>
        change
      </button>
    </div>
  );
};

export default Prop3;
