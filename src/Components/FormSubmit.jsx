'use client';
import React, { useState } from 'react';

const FormSubmit = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmP, setConfirmP] = useState();
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);
  const [adds, setAdds] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (adds !== '') {
      const a = data.map((items, i) =>
        i == adds
          ? {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              phone: phone,
              confirmP: confirmP,
            }
          : 'items'
      );
      setData(a);
      // setFirstName('');
      // setLastName('');
      // setEmail('');
      // setPhone('');
      // setPassword('');
      // setConfirmP('');
      // setCheck('');
    } else {
      let acc = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password,
        confirmP: confirmP,
      };
      if (check) {
        setData([...data, acc]);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmP('');
        setCheck('');
      }
    }
  };

  const delteHandler = (index) => {
    console.log(index);
    let del = [...data];
    del.splice(index, 1);
    setData(del);
  };

  const addHandler = (index) => {
    setAdds(index);
     data.find((items, i) =>
      index == i
        ? (setFirstName(items.firstName),
          setLastName(items.lastName),
          setEmail(items.email),
          setPassword(items.password),
          setConfirmP(items.confirmP),
          setPhone(items.phone))
        : ''
    );
  };

  return (
    <>
      <div className=" container mt-4">
        <div>
          <div className=" w-100 bg-dark p-4 rounded-4 d-flex flex-column justify-content-center align-items-center m-auto">
            <h2 className=" fs-2 fw-bolder text-white">Sign Up</h2>
            <p className=" fs-5 fw-bolder text-white">Create your Hope UI account</p>
            <form
              onSubmit={submitHandler}
              className=" d-flex flex-column justify-content-center align-items-center">
              <div className=" row justify-content-between align-items-center mt-4">
                <div className=" col-6">
                  <p className="fs-5 fw-bolder text-white">First Name</p>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                  />
                </div>
                <div className=" col-6">
                  <p className="fs-5 fw-bolder text-white">Last Name</p>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className=" row justify-content-between align-items-center mt-4">
                <div className=" col-6">
                  <p className="fs-5 fw-bolder text-white">Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className=" col-6">
                  <p className="fs-5 fw-bolder text-white">Phone No.</p>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    name="number"
                    id="number"
                  />
                </div>
              </div>
              <div className=" row justify-content-between align-items-center mt-4">
                <div className=" col-6">
                  <p className="fs-5 fw-bolder text-white">Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className=" col-6">
                  <p className="fs-5 fw-bolder text-white">Confirm password</p>
                  <input
                    value={confirmP}
                    onChange={(e) => setConfirmP(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <div className=" d-flex mt-3">
                <input
                  value={check}
                  onChange={(e) => setCheck(!check)}
                  checked={check === true}
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <p className="fs-6 fw-medium text-white mt-1 pt-2 ms-2">
                  I agree with the terms of use
                </p>
              </div>
              <button
                type="submit"
                className=" border-0 py-2 px-5 text-white fs-5 fw-bold rounded-3 mt-4"
                style={{ backgroundColor: '#DB0C26' }}>
                Submit
              </button>
            </form>
          </div>
          <div className=" row row-gap-4 mt-5">
            {data.map((items, i) => {
              return (
                <>
                  <div key={i} className=" col-4">
                    <div className=" bg-dark p-3 rounded-2">
                      <p>fname : {items.firstName}</p>
                      <p>lname : {items.lastName}</p>
                      <p>email : {items.email}</p>
                      <p>phone : {items.phone}</p>
                      <p>password : {items.password}</p>
                      <p>confirmP : {items.confirmP}</p>
                      <button
                        onClick={() => delteHandler(i)}
                        className=" border-0 py-2 px-3 text-white fs-5 fw-bold rounded-3 mt-2"
                        style={{ backgroundColor: '#DB0C26' }}>
                        Delete
                      </button>
                      <button
                        onClick={() => addHandler(i)}
                        className=" border-0 py-2 px-3 text-white fs-5 fw-bold rounded-3 mt-2 ms-2"
                        style={{ backgroundColor: 'blue' }}>
                        Add
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmit;
