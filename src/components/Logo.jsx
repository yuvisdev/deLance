import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="name">
      deLance<span>.com</span>
      {/* <img src="./delance.png" className="logo" /> */}
    </Link>
  );
}

export default Logo;
