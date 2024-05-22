import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "../api/index";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import useCartStore from "../context/likeStore";

const Products = () => {
  const [data, setData] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToLiked = useCartStore((state) => state.addToLiked);
  const removeFromLiked = useCartStore((state) => state.removeFromLiked);
  const likedItems = useCartStore((state) => state.likedItems);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => setData(response.data.products))
      .catch((error) => console.log("Error:", error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleToggleLike = (item) => {
    if (likedItems.find((i) => i.id === item.id)) {
      removeFromLiked(item.id);
    } else {
      addToLiked(item);
    }
  };

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
            onClick={() => handleToggleLike(el)}
          />
          <PiShoppingCartThin
            style={{
              color: "black",
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleAddToCart(el)}
          />
        </div>
      </div>
    </div>
  ));

  return <div className="wrapper container">{productItems}</div>;
};

export default Products;
