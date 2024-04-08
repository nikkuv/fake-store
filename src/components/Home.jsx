import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result?.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const addToCartHandler = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="container">
      {loading ? <>Loading...</> : <div className="productsWrapper">
        {products?.length > 0 &&
          products.map((product, id) => {
            return (
              <div key={product?.id || id} className="card">
                <img src={product?.image} />
                <div className="flex">
                  <h6>{product?.title}</h6>
                  <h5>{product?.price}</h5>
                  <button
                    className="btn"
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                  >
                    Add to Card
                  </button>
                </div>
              </div>
            );
          })}
      </div>}
    </div>
  );
};

export default Home;