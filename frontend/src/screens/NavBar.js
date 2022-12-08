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
            <li className="listItem">Home</li>
          </Link>

          <Link to="/productview" style={{ textDecoration: "none" }}>
          <li className="listItem">Products</li>
          </Link>

          {/* <li className="listItem">Menu</li> */}
          {/* <li className="listItem">Events</li> */}
          <li className="listItem">About Us</li>
          <li className="listItem">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
