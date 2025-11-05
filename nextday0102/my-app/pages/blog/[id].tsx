import Navbar from "../../components/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface PostProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await res.json();

  return { props: { post } };
};

export default function BlogPost({ post }: PostProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
}
