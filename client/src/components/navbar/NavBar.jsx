import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({ currentUser }) {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {currentUser === null ? (
          <li>
            <Link to="/connexion">Connexion</Link> /{" "}
            <Link to="/inscription">Inscription</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/deconnexion">Se déconnecter</Link>
            </li>
            <li>
              <Link to="/audio">écouter</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};
NavBar.defaultProps = {
  currentUser: null,
};
