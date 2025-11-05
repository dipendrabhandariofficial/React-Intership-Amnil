import Navbar from "../components/Navbar";
import { GetStaticProps } from "next";

type Product = {
  id: number;
  title: string;
  price: number;
};

interface ProductProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<ProductProps> = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = await res.json();

  return {
    props: { products },
    revalidate: 10, // ISR - regenerate every 10 seconds
  };
};

export default function Products({ products }: ProductProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Products (ISR)</h1>
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h2 className="font-semibold text-xl">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
