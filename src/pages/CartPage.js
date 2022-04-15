import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Shared/Layout/Layout";

import { RiDeleteBin6Fill } from "react-icons/ri";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  // delete from cart

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  return (
    <Layout>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.image} alt="" height="80px" width="80px" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <RiDeleteBin6Fill
                    onClick={() => deleteFromCart(item)}
                  ></RiDeleteBin6Fill>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default CartPage;
