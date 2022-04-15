import React, { useEffect, useState } from "react";
import Layout from "../components/Shared/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../firebase.config";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(
        doc(fireDB, "products", params.productId)
      );
      setProduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center items-center">
          <div className="col-md-8">
            {product && (
              <div>
                <h3 className="fw-bold">{product.title}</h3>
                <img src={product.image} alt="" className="product-info-img" />
                <hr />
                <p className="fw-bold">{product.description}</p>
                <div className="d-flex justify-content-end my-3">
                  <button>Add To Cart </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
