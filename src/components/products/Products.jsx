import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "../api/index";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import useCartStore from "../context/cartStore";
import useStore from "../context/likeStore";
const Products = () => {
  const [data, setData] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToLiked = useStore((state) => state.toggleWishlistItem);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => setData(response.data.products))
      .catch((error) => console.log("Error:", error));
  }, []);




  const productItems = data?.map((el) => (
    <div key={el.id} className="product-item">
      <div className="card">
        <img src={el.images[0]} width={200} alt={el.title} />
      </div>
      <h3 className="title">{el.title.slice(0, 15)}... - Transparent</h3>
      <div className="pri">
        <h4 className="price">$ {el.price}</h4>
        <div className="icons">
          <CiHeart
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={() => addToLiked(el)}
          />
          <PiShoppingCartThin
            style={{
              color: "black",
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={() => addToCart(el)}
          />
        </div>
      </div>
    </div>
  ));

  return <div className="wrapper container">{productItems}</div>;
};

export default Products;
