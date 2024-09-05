import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const userName = useSelector((store) => store.user.name);
  return (
    <ul className="navbar">
      <li>
        <Link>Careers</Link>
      </li>
      <li>
        <Link to="/login">Sign in</Link>
      </li>
      <li>
        <Link to="/jobs">
          <button>Jobs</button>
        </Link>
      </li>
      <li>{userName ? userName : ""}</li>
    </ul>
  );
}

export default NavBar;
