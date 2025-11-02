import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Next.js Rendering Demo</h1>
        <p className="text-lg text-gray-600">
          Explore SSG, SSR, and ISR implementations below.
        </p>
      </div>
    </>
  );
}
