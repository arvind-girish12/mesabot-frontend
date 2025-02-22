import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.scss";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" style={{ padding: "20px" }} />
      <ul>
        {(currentPath === "/chat" || currentPath === "/") && (
          <li className="active">
            <Link 
              to="/chat"
              className="active"
            >
              Chat
            </Link>
          </li>
        )}
        {currentPath === "/admin" && (
          <li className="active">
            <Link 
              to="/admin"
              className="active"
            >
              Admin Panel
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
