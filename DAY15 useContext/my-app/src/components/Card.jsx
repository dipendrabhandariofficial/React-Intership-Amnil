import "./Card.css";

import { useCartContext } from "../context/CartContext";

const Card = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <h3 className="product-name">{product.title}</h3>
      <p className="product-price">₹{product.price}</p>
      <div className="card-buttons">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
