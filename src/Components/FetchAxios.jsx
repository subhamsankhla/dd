import React from 'react';

const FetchAxios = () => {
  function getAxios() {
    axios.get;
  }
  return (
    <>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-info" onClick={getAxios}>
              data
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchAxios;
