import NameChange from './Components/NameChange';
import ValueEncresDecres from './Components/ValueEncresDecres';
import FormSubmit from './Components/FormSubmit';
import Task from './Components/Task';
import Parent from './Components/Props/Parent';
import Prop1 from './Components/Props/Prop1';
import Check2Box from './Components/CheckBox/Check2Box';
import Check3Box from './Components/CheckBox/Check3Box';
import Video from './Components/Video';
import TodoList from './Components/TodoList';
import Useeffect from './Components/Useeffect';
import FetchMethod from './Components/FetchMethod';
import MainData from './Components/CompleteForm/MainData';
import Products from './Products';
import FetchApi from './Components/FetchApi';
import AxiosGet from './Components/AxiosGet';
import FetchAxios from './Components/FetchAxios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import AllSellect from './Components/CheckBox/AllSellect';
import React, { createContext, useState } from 'react';
import UseMemo from './Components/UseMemo';
import UseRef from './Components/UseRef';

export const globelContext = createContext();

const App = () => {
  const [color, setColor] = useState('green');
  return (
    <>
      <globelContext.Provider value={{ appColor: color }}>
        {/* <ValueEncresDecres /> */}
        {/*============== usecontext api name change ==============*/}
        {/* <NameChange /> */}
        {/* <Task /> */}
        {/* <FormSubmit /> */}
        {/* <Parent /> */}
        {/* <Prop1 /> */}
        {/* <Check3Box /> */}
        {/* <Video /> */}
        {/* <TodoList /> */}
        {/* <Useeffect /> */}
        {/* <FetchMethod />  */}
        {/* <MainData /> */}
        {/* <Products /> */}
        {/* <FetchApi /> */}
        {/* <AxiosGet /> */}
        {/* <FetchAxios /> */}
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AxiosGet />} />
          <Route path="userDetails/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter> */}
        {/* <AllSellect /> */}
        {/* <Check2Box /> */}
        {/* <UseMemo /> */}
        <UseRef/>
      </globelContext.Provider>
    </>
  );
};

export default App;
