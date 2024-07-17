import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>Yoga Nidra</li>
        <li>A propos</li>
      </ul>
    </nav>
  );
}
