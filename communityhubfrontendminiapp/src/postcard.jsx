import { useState } from "react";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h3>{post.title}</h3>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </div>
  );
}