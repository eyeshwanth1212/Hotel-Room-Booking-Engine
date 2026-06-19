import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1e40af",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>

      <Link to="/history" style={{ color: "white" }}>
        History
      </Link>

      <Link to="/admin" style={{ color: "white" }}>
        Admin
      </Link>

      <Link to="/confirmation" style={{ color: "white" }}>
        Confirmation
      </Link>

      <Link to="/upload" style={{ color: "white" }}>
        Upload
      </Link>

      <Link to="/api" style={{ color: "white" }}>
        API
      </Link>
    </nav>
  );
}

export default Navbar;