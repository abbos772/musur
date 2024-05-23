import React from "react";
import useStore from "../context/likeStore"; // Adjust the path as necessary
import "./Like.css";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import useCartStore from "../context/likeStore";
const Wishlist = () => {
  const { bears, toggleWishlistItem } = useStore();

  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <div className="continer">
      {bears?.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul>
          {bears?.map((el) => (
            <div key={el.id} className="product-item">
              <div className="card">
                <img src={el.images[0]} width={200} alt={el.title} />
              </div>
              <h3 className="title">
                {el.title.slice(0, 15)}... - Transparent
              </h3>
              <div className="pri">
                <h4 className="price">$ {el.price}</h4>
                <div className="icons"></div>
              </div>
              <CiHeart
                style={{
                  width: "20",
                  height: "20",
                  cursor: "pointer",
                }}
                onClick={() => toggleWishlistItem(el)}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
