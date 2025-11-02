import Navbar from "../../components/Navbar";
import Link from "next/link";
import { GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
};

interface BlogProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  return {
    props: { posts },
  };
};

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog (SSG)</h1>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="bg-white p-4 rounded-lg shadow mb-4 hover:bg-gray-100 cursor-pointer">
              <h2 className="font-semibold text-xl">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
