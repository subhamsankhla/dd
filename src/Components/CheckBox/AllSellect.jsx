import React, { useEffect, useState } from 'react';
const userData = [
  { names: 'subham' },
  { names: 'rinki' },
  { names: 'ankita' },
  { names: 'mamta' },
  { names: 'geeta' },
];
const AllSellect = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(userData);
  }, []);
  return (
    <>
      <div className=" container my-3 d-flex justify-content-center">
        <div className="">
          <form action="">
            <h3>sellect users</h3>
            <div className=" d-flex align-items-center">
              <input className="mb-2" type="checkbox" name="checkbox" id="checkbox" />
              <p className=" text-black fs-4 ms-3">sellect All</p>
            </div>
            {users.map((user) => {
              return (
                <div>
                  <div className=" d-flex align-items-center">
                    <input className="mb-2" type="checkbox" name="checkbox" id="checkbox" />
                    <p className=" text-black fs-4 ms-3">{user.names}</p>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </>
  );
};

export default AllSellect;
