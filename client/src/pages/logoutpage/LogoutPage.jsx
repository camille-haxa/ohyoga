import axios from "axios";
import { useOutletContext, Link } from "react-router-dom";

import "./LogoutPage.css";

export default function LogoutPage() {
  const { currentUser, setCurrentUser } = useOutletContext();
  const expressURL = import.meta.env.VITE_API_URL;

  const handleLogout = async () => {
    try {
      await axios.get(`${expressURL}/api/auth/logout`, {
        withCredentials: true,
      });
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="logout">
      {currentUser == null ? (
        <>
          <p className="logout-title">Vous êtes déconnecté</p>
          <Link to="/" id="logout-link">
            Home
          </Link>
        </>
      ) : (
        <>
          <h4 className="logout-title">cliquez pour vous déconnecter</h4>
          <button
            className="logout-button"
            type="button"
            onClick={handleLogout}
          >
            {" "}
            Déconnexion{" "}
          </button>
        </>
      )}
    </div>
  );
}
