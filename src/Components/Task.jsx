'use client';
import { useState } from 'react';
import girl from '../assets/girl.png';

const Task = () => {
  const [ids, setIds] = useState('');
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [account, setAccount] = useState([]);
  const [isPrivancy, setIsPrivancy] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (ids !== '') {
      const detail = account.map((items, i) =>
        i == ids ? { email: email, password: password, username: username } : items
      );
      setAccount(detail);
      setEmail('');
      setUsername('');
      setPassword('');
    } else {
      const acc = {
        email: email,
        password: password,
        username: username,
      };
      if (isPrivancy) {
        setAccount([...account, acc]);
        setEmail('');
        setUsername('');
        setPassword('');
        setIsPrivancy('');
      }
    }
  };

  const deleteDataHandler = (index) => {
    let data = [...account];
    data.splice(index, 1);
    setAccount(data);
  };
  function addhandler(id) {
    setIds(id);
    const x = account.find((items, i) =>
      i == id
        ? (setEmail(items.email), setPassword(items.password), setUsername(items.username))
        : ''
    );
    console.log(x);
  }
  // console.log(ids)
  return (
    <>
      <div className="container my-5">
        <div className=" p-5 rounded-4" style={{ backgroundColor: '#E3CDCD' }}>
          <div className="row justify-content-between align-items-center">
            <div className=" col-7 p-5 ps-2">
              <h1 className=" fs-2 fw-bolder text-dark">Create an account for free</h1>
              <p className=" fs-4 fw-semibold mt-2" style={{ color: '#757575' }}>
                Free forever. No payment needed.
              </p>
              <form className=" mt-4" onSubmit={submitHandler}>
                <p className=" fs-5 fw-bolder text-dark">Your email*</p>
                <input
                  required
                  className=" py-2 ps-2 pe-5 mt-1 w-100"
                  style={{ backgroundColor: '#F2F2F2' }}
                  type="email"
                  name="email"
                  id="elmail"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p className=" fs-5 fw-bolder text-dark mt-4">Create username*</p>
                <input
                  required
                  className=" py-2 ps-2 pe-5 mt-1 w-100"
                  style={{ backgroundColor: '#F2F2F2' }}
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <p className=" fs-5 fw-bolder text-dark mt-4">Password*</p>
                <input
                  required
                  className=" py-2 ps-2 pe-5 mt-1 w-100"
                  style={{ backgroundColor: '#F2F2F2' }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className=" d-flex align-items-start mt-3">
                  <input
                    className=" mt-2"
                    type="checkbox"
                    name="checkbox"
                    id="chekbox"
                    onChange={() => setIsPrivancy(!isPrivancy)}
                    checked={isPrivancy === true}
                  />
                  <p className=" text-dark ms-2">
                    By creating an account you are agreeing to our Terms <br /> and Conditions and
                    Privacy Policy
                  </p>
                </div>
                <button
                  className=" py-2 px-5 border-0 rounded-3 mt-3 w-100 text-dark fs-3 fw-semibold"
                  type="submit"
                  style={{ backgroundColor: '#2D7FF9' }}>
                  submit
                </button>
              </form>
            </div>
            <div className="col-5">
              <img className="w-100 rounded-4" src={girl} alt="" />
            </div>
          </div>
        </div>
        <div className="row row-gap-1">
          {account.map((items, i) => {
            return (
              <div className="p-4 col-6" key={i}>
                <div className="data_box p-4">
                  <h4 className=" fs-4">
                    Email - <span className=" fs-5">{items.email}</span>
                  </h4>
                  <h4 className=" fs-4">
                    Username - <span className=" fs-5">{items.username}</span>
                  </h4>
                  <h4 className=" fs-4">
                    Password - <span className=" fs-5">{items.password}</span>
                  </h4>
                  <button
                    className="py-1 px-3 border-0 rounded-3 text-white fs-5 fw-semibold mt-3"
                    type="submit"
                    style={{ backgroundColor: 'red' }}
                    onClick={() => deleteDataHandler(i)}>
                    delete
                  </button>
                  <button
                    onClick={() => addhandler(i)}
                    className="py-1 px-3 border-0 rounded-3 text-white fs-5 fw-semibold mt-3 ms-3"
                    type="submit"
                    style={{ backgroundColor: '#2D7FF9' }}>
                    add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Task;
