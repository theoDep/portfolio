import { Link, useLocation } from "react-router-dom";

const makeLink = (path, text) => <Link to={path}>{text}</Link>;

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="p-12">
      <div className="nav-wrapper flex justify-center lg:justify-between">
        <p className="hidden lg:block">LOGO</p>
        <ul className="flex gap-8 text-xl">
          {pathname === "/" && (
            <>
              <li>{makeLink("/", "Home")}</li>
              <li>{makeLink("#", "Projects")}</li>
              <li>{makeLink("#", "Contact")}</li>
            </>
          )}
          {pathname.split("/")[1] === "admin" && (
            <>
              <li>{makeLink("/", "Home")}</li>
              <li>{makeLink("/admin/project", "Project")}</li>
              <li>{makeLink("/admin/tech", "Techs")}</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
