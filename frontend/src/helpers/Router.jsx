import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import Admin from "../pages/Admin";

const makeRoute = (path, element) => <Route path={path} element={element} />;

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {makeRoute("/", <Home />)}
        {makeRoute("/admin", <Admin />)}
        {makeRoute("/admin/project", <Admin />)}
        {makeRoute("/admin/tech", <Admin />)}
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
