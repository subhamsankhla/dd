import React from 'react';
import Prop3 from './Prop3';

const Prop2 = (props) => {
  return (
    <div>
      <Prop3 fname={props.fname} setname={props.setname} />
    </div>
  );
};

export default Prop2;
