import axios from "axios";
import { createContext, useState, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get("http://localhost:5001/projects");
      setProjects(response.data);
      setCurrentProject(response.data[0]);
    };
    fetchProjects();
  }, []);

  const projectsData = useMemo(() => ({ projects, setProjects }), [projects]);
  const showProject = useMemo(
    () => ({ currentProject, setCurrentProject }),
    [currentProject]
  );
  const previous = () => {
    const index = projects.indexOf(currentProject);
    if (index === 0) {
      setCurrentProject(projects[projects.length - 1]);
    } else {
      setCurrentProject(projects[index - 1]);
    }
  };

  const next = () => {
    const index = projects.indexOf(currentProject);
    if (index === projects.length - 1) {
      setCurrentProject(projects[0]);
    } else {
      setCurrentProject(projects[index + 1]);
    }
  };

  const value = useMemo(
    () => ({ showProject, next, previous }),
    [projectsData, showProject]
  );

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

ProjectContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProjectContext = () => useContext(ProjectContext);
