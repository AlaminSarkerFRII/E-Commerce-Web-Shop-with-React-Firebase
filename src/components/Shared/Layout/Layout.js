import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="content">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
