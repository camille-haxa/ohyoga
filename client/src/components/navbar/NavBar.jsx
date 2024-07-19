import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./NavBar.css";

export default function NavBar({ currentUser }) {
  return (
    <nav className="navbar-container">
      <div>
        <ul className="navbar-list">
          {currentUser ? (
            <li className="navbar">hello {currentUser.username} !</li>
          ) : null}
          <li>
            <Link className="navbar-link" to="/">
              Accueil
            </Link>
          </li>
          {currentUser === null ? (
            <li>
              <Link className="navbar-link" to="/connexion">
                Connexion
              </Link>{" "}
              /{" "}
              <Link className="navbar-link" to="/inscription">
                Inscription
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link className="navbar-link" to="/deconnexion">
                  Se déconnecter
                </Link>
              </li>
              <li>
                <Link className="navbar-link" to="/audio">
                  écouter
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
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
