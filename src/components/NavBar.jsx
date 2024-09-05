import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar">
      <li>
        <Link>Careers</Link>
      </li>
      <li>
        <Link to="/login">Sign in</Link>
      </li>
      <li>
        <Link>
          <button>Join</button>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
