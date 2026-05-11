import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PostDetail() {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Link to="/posts">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}