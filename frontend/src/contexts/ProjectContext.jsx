import axios from "axios";
import { createContext, useState, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get("http://localhost:5001/projects");
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  const value = useMemo(() => ({ projects, setProjects }), [projects]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

ProjectContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProjectContext = () => useContext(ProjectContext);
