import { NavLink, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import './nav.css';

function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink 
          to="/game" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Game
        </NavLink>
        <NavLink 
          to="/stats" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Stats
        </NavLink>
        {Auth.loggedIn() ? (
          <span 
            className="nav-link"
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}>
            Logout
          </span>
        ) : (
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Login
          </NavLink>
        )}


      </nav>
    </header>
  );
}

export default Nav;