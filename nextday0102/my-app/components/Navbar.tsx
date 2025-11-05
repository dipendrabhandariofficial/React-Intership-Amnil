import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 mb-8">
      <div className="container mx-auto flex justify-center gap-6">
        <Link href="/" className="text-blue-600 font-semibold hover:underline">
          Home
        </Link>
        <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
          Blog (SSG)
        </Link>
        <Link href="/news" className="text-blue-600 font-semibold hover:underline">
          News (SSR)
        </Link>
        <Link href="/products" className="text-blue-600 font-semibold hover:underline">
          Products (ISR)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
