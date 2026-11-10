import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Little Lemon Logo" className="nav-logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;