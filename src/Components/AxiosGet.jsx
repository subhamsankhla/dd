import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AxiosGet = () => {
  const [userdata, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(res)
        setData(res.data);
      } catch (err) {
        console.log('Error:', err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className=" container-fluid">
        <h2 className=" text-center mt-5">Fetch Api axios</h2>
        <div className=" row row-gap-4">
          {userdata.map((data) => {
            return (
              <div className=" col-3">
                <Link to={`userDetails/${data.id}`}>
                  <div className="card p-3 h-100">
                    <p className=" text-black">id : {data.id}</p>
                    <p className=" text-black">email : {data.email}</p>
                    <p className=" text-black">name : {data.name}</p>
                    <p className=" text-black">website : {data.website}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AxiosGet;
