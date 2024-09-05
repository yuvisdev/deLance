import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  // const userName = useSelector((store) => store.user.name);
  return (
    <ul className="navbar text-xl font-semibold">
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
      <li>
        <Link
          to="/pay"
          className="bg-violet-200 inline-block py-2 px-3 border border-purple-800"
        >
          Connect wallet
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
