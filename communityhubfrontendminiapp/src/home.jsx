import useFetch from "../hooks/useFetch";
import PostCard from "../components/Post/PostCard";

export default function Home() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading home...</p>;
  if (error) return <p>Something went wrong</p>;

  const recentPosts = posts.slice(0, 5);

  return (
    <div>
      <h1>Welcome to CommunityHub</h1>
      <p>Share ideas, read posts, and connect with others.</p>

      <h2>Recent Posts</h2>

      {recentPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}