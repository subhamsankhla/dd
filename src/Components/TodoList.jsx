import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTask('');
    setDescription('');
    setData([...data, { task, description }]);
    console.log(data);
  };

  return (
    <>
      <h2 className=" fs-2 fw-bolder text-primary text-center my-4">Todolist</h2>
      <form onSubmit={submitHandler} className=" d-flex justify-content-center">
        <div className=" d-flex align-items-center">
          <p className=" text-dark fs-4 fw-bolder me-2 mt-2">task</p>
          <input
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="py-2 px-3"
            type="text"
          />
        </div>
        <div className=" d-flex align-items-center mx-3">
          <p className=" text-dark fs-4 fw-bolder me-2 mt-2">task</p>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-2 px-3"
            type="text"
          />
        </div>
        <button className="py-2 px-4 bg-info text-black fs-3 fw-medium rounded-4">task</button>
      </form>
    </>
  );
};

export default TodoList;
