import React, { useEffect, useState } from "react";
import Layout from "../components/Shared/Layout/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../firebase.config";
import { products } from "../../src/products.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomePage = () => {
  // call to data cart item

  const { cartItem } = useSelector((state) => state.cartReducer);

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });
      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4">
                <div className="product-details m-2 p-1 position-relative">
                  <div className="product-content">
                    <p className="text-center mt-2">{product.title}</p>
                    <div className="text-center mb-3">
                      <img src={product.image} alt="" className="product-img" />
                    </div>
                  </div>
                  <div className="product-actions">
                    <h2>{product.price} TAKA/-</h2>
                    <div className="d-flex">
                      <button className="mx-2">Add To Cart</button>
                      <button
                        onClick={() => navigate(`/productinfo/${product.id}`)}
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
