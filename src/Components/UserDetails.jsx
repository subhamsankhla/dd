import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [userdata, setuserData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setuserData(res.data);
      } catch (err) {
        console.log('Error:', err);
      }
    }
    getData();
  }, []);

  return (
    <div key={id}>
      <div>
        {userdata ? (
          <div className="card p-4">
            <p className="text-black">id : {userdata.id}</p>
            <p className="text-black">Name : {userdata.name}</p>
            <p className="text-black">Username : {userdata.username}</p>
            <p className="text-black">Email : {userdata.email}</p>
            <p className="text-black">phone : {userdata.phone}</p>
            <p className="text-black">address : </p>
            <p className="text-black ps-2"> city - '{userdata.address.city}'</p>
            <p className="text-black ps-2">geo : </p>
            <p className="text-black ps-3"> lat - '{userdata.address.geo.lat}'</p>
            <p className="text-black ps-3"> lng - '{userdata.address.geo.lng}'</p>
            <p className="text-black ps-2">street - '{userdata.address.street}'</p>
            <p className="text-black ps-2">suite - '{userdata.address.suite}'</p>
            <p className="text-black ps-2">zipcode - '{userdata.address.zipcode}'</p>
            <p className="text-black">company : </p>
            <p className="text-black ps-2"> bs - '{userdata.company.bs}'</p>
            <p className="text-black ps-2">catchPhrase - '{userdata.company.catchPhrase}'</p>
            <p className="text-black ps-2">name - '{userdata.company.name}'</p>
          </div>
        ) : (
          'null'
        )}
      </div>
    </div>
  );
};

export default UserDetails;
