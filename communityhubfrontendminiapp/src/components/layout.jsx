import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={{ background: "#007bff", padding: "15px" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <NavLink to="/" style={{ color: "white" }}>Home</NavLink>
          <NavLink to="/posts" style={{ color: "white" }}>Posts</NavLink>
          <NavLink to="/create" style={{ color: "white" }}>Create Post</NavLink>
          <NavLink to="/about" style={{ color: "white" }}>About</NavLink>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "20px", background: "#f0f0f0" }}>
        <p>© 2026 CommunityHub</p>
      </footer>
    </div>
  );
}