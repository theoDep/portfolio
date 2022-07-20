import { Link } from "react-router-dom";

const makeLink = (path, text) => <Link to={path}>{text}</Link>;

function Navbar() {
  return (
    <nav className="p-12">
      <div className="nav-wrapper flex justify-center lg:justify-between">
        <p className="hidden lg:block">LOGO</p>
        <ul className="flex gap-8 text-xl">
          <li>{makeLink("/", "Home")}</li>
          <li>{makeLink("#", "Projects")}</li>
          <li>{makeLink("#", "Contact")}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
