import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/create">Create</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}