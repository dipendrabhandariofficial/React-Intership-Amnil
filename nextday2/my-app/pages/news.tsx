import Navbar from "../components/Navbar";
import { GetServerSideProps } from "next";

type NewsItem = {
  id: number;
  title: string;
  body: string;
};

interface NewsProps {
  news: NewsItem[];
}

export const getServerSideProps: GetServerSideProps<NewsProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const news = await res.json();

  return { props: { news } };
};

export default function News({ news }: NewsProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Latest News (SSR)</h1>
        {news.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h2 className="font-semibold text-xl mb-2">{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
