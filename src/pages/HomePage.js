import React, { useState } from "react";
import Layout from "../components/Shared/Layout/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../firebase.config";
import Products from "../../src/products.json";
const HomePage = () => {
  // adding data from fire store
  async function handleAddToData() {
    try {
      await addDoc(collection(fireDB, "users"), { name: "Sarker", age: 26 });
    } catch (error) {
      console.log(error);
    }
  }
  // adding data from fire store
  async function handleGetToData() {
    try {
      const users = await getDocs(collection(fireDB, "users"), {
        name: "Sarker",
        age: 26,
      });
      const usersArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        usersArray.push(obj);
      });
      console.log(usersArray);
    } catch (error) {
      console.log(error);
    }
  }

  // load data from products json file

  function handleAddToProducts() {
    Products.map(async (product) => {
      try {
        await addDoc(collection(fireDB, "products"), product);
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <Layout>
      <h2>This Is Home Page </h2>
      <button onClick={handleAddToData} className="btn btn-primary">
        Add Data To Firebase
      </button>
      <button onClick={handleGetToData} className="btn btn-primary ms-3">
        Get Data from FStore
      </button>
      <button onClick={handleAddToProducts} className="btn btn-primary ms-3">
        Load Data
      </button>
    </Layout>
  );
};

export default HomePage;
