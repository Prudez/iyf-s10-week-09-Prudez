import useFetch from "../hooks/useFetch";
import { useState } from "react";
import PostCard from "../components/Post/PostCard";

export default function Posts() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [search, setSearch] = useState("");

  if (loading) {
    return <p>Loading posts, please wait...</p>;
  }

  if (error) {
    return (
      <p style={{ color: "red" }}>
        ⚠️ Unable to load posts. Please try again later.
      </p>
    );
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>All Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "15px",
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {filteredPosts.length === 0 ? (
        <p>No posts found 😕</p>
      ) : (
        filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}