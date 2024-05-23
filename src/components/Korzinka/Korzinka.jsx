import React from "react";
import './Karzinka.css'
import useCartStore from "../../components/context/cartStore";

const Karzenka = () => {
  const { cart, removeFromCart, decrementCart, addToCart } = useCartStore();
console.log(cart);
  return (
 <>
 
 
 <div className="karzenka  container">
      {cart.length === 0 ? (
        <p style={{textAlign:'center',fontSize:'80px'}}>Корзинка пуста</p>
      ) : (
        <div className="cart-items continer">
          {cart?.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.images[0]}
                alt={item.title}
                className="cart-item-image"
                width={150}
              />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.price} UZS</p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => decrementCart(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
 
 </>
  );
};

export default Karzenka;
