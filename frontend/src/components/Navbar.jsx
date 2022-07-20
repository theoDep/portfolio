import { Link } from "react-router-dom";

const makeLink = (path, text) => <Link to={path}>{text}</Link>;

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <p>LOGO</p>
        <ul>
          <li>{makeLink("/", "Home")}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
