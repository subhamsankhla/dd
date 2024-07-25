import React, { useEffect, useState } from 'react';

const FetchApi = () => {
  const [products, setProducts] = useState([]);
  async function getApi() {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log('json', json);
        setProducts(json);
      })
      .catch((err) => {
        console.log(err, 'errors');
      });
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div className=" container-fluid">
        <h2 className=" text-center mt-5">Fetch Api</h2>
        <div className=" row row-gap-4">
          {products.map((items) => {
            return (
              <div className=" col-3">
                <div className="card h-100 p-3">
                  <img height={250} src={items.image} alt="images" />
                  <h2 className=" text-black">{items.price}</h2>
                  <h5 className=" text-black">{items.category}</h5>
                  <h6 className=" text-black">{items.title}</h6>
                  <p className=" text-black">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchApi;
