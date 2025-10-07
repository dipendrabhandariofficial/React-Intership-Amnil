import { useState, useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=6");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <div className="card-container">
          {products.map((product) => (
            <Card
              key={product.id}
              product={{
                title: product.title,
                price: `${product.price}`,
                image: product.image,
              }}
            />
          ))}
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
