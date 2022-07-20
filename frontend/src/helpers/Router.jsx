import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";

const makeRoute = (path, element) => <Route path={path} element={element} />;

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Routes>{makeRoute("/", <Home />)}</Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
