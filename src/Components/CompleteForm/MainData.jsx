import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayData from './DisplayData';
import Form from './Form';
const MainData = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form data={data} setData={setData} />} />
          <Route path="/display" element={<DisplayData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default MainData;
