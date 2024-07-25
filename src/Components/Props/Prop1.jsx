import React, { useState } from 'react';
import Prop2 from './Prop2';

const Prop1 = () => {
  const [first, setfirst] = useState('subham');
  return (
    <div>
      <Prop2 fname={first} setname={setfirst} />
    </div>
  );
};

export default Prop1;
