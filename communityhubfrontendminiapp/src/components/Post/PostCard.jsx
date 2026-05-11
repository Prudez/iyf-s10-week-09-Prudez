import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px", borderRadius: "8px" }}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <Link to={`/posts/${post.id}`}>Read more →</Link>
      <button onClick={() => setLikes(likes + 1)} style={{ marginLeft: "15px" }}>
        ❤️ {likes}
      </button>
    </div>
  );
}