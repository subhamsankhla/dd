import React, { useEffect, useState } from 'react';

const FetchMethod = () => {
  const [data, setData] = useState([]);
  async function test() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        console.log(json, 'json');
        setData(json);
      })
      .catch((e) => {
        console.log(e, 'error');
      });
  }
  useEffect(() => {
    test();
  }, []);
  return (
    <>
      <div className=' container-fluid mt-5'>
        <h2 className=' text-center fw-bolder fs-2'>Fetch Api</h2>
        <div className="row flex-wrap">
          {data.map((items, i) => {
            return (
              <div className="col-3" key={i}>
                <div className=" bg-info p-4 rounded-4 my-4">
                  <p>email : {items.email}</p>
                  <p>name : {items.name}</p>
                  <p>username : {items.username}</p>
                  <p>address : {items.address.geo.lat}</p>
                  <p>address : {items.address.city}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchMethod;
