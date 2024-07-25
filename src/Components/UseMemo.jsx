import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [firstcount, setFirstCount] = useState(0);
  const [secondtcount, setSecondCount] = useState(5);

  const multipalCountMemo = useMemo(
    function multicount() {
      console.log('fjerikos');
      return firstcount * 2;
    },
    [firstcount]
  );
  return (
    <div>
      <h1>{firstcount}</h1>
      <button onClick={() => setFirstCount(firstcount + 1)}>incress count</button>
      <h1>{secondtcount}</h1>
      <button onClick={() => setSecondCount(secondtcount * 2)}>incress count</button>
      <h2>{multipalCountMemo}</h2>
    </div>
  );
};

export default UseMemo;
