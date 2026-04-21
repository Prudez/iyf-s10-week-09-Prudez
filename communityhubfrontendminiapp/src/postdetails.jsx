import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function PostDetail() {
  const { id } = useParams();

  const { data: post, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}