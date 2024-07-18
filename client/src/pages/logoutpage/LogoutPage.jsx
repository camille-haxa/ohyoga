import axios from "axios";
import { useOutletContext, Link } from "react-router-dom";

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
    <div>
      {currentUser == null ? (
        <>
          <p>Vous êtes déconnecté</p>
          <Link to="/">Home</Link>
        </>
      ) : (
        <button type="button" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>
      )}
    </div>
  );
}
