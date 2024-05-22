import React from "react";
import Products from "../products/Products";
import img from "../../img/p.webp";
function Home() {
  return (
    <div className="continer">
      <img style={{ marginTop: "100px" }} src={img} width={1380} alt="" />
      <Products />
    </div>
  );
}

export default Home;
