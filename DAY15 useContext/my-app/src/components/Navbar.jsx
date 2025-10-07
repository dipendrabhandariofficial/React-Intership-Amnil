import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import { useThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartCount, cartItems, removeFromCart } = useCartContext();
  const {theme, toggleTheme} = useThemeContext();
  const [showBasket, setShowBasket] = useState(false);

  const handleBasketClick = () => {
    if (cartItems.length > 0) {
      setShowBasket((prev) => !prev);
    }
  };

  // Auto-close basket when cart becomes empty
  useEffect(() => {///////////////////////////////////
    if (cartItems.length === 0) {
      setShowBasket(false);// dont use /////////////////////////////////////////////////
    }
  }, [cartItems.length]);

  //  Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0);

  return (
    <nav className="navbar">
      <h1 className="logo">DwaG</h1>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div
        className="cart-count"
        onClick={handleBasketClick}
        style={{ cursor: "pointer" }}
      >
        Basket: {cartCount}
      </div>

      {showBasket && cartItems.length > 0 && (
        <div className="basket-dropdown">
          <div className="basket-items-container">
            {cartItems.map((item) => (
              <div key={item.uniqueId} className="basket-item"> 
                <div className="item-details">
                  <span className="item-name">
                    {item.name || item.title || "Product"}
                  </span>
                </div>
                <span className="item-image">
                  <img
                    src={item.image}
                    alt={item.name || item.title || "Product"}
                    width={50}
                    height={50}
                  />
                </span>
                <span className="item-price">₹{item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.uniqueId)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Total section */}
          <div className="basket-total">
            <span>Total:</span>
            <span className="total-amount">₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
