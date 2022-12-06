import { Link } from "react-router-dom";
import styles from "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className="text">Afro Bucks</div>
      </Link>

      <div className="item">
        <ul className="list">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="listItem">Homepage</li>
          </Link>

          <li className="listItem">Products</li>
          <li className="listItem">Menu</li>
          <li className="listItem">Events</li>
          <li className="listItem">Blog</li>
          <li className="listItem">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
