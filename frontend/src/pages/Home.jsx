import AnimatedTextBox from "@components/AnimatedTextBox";
import ProjectBox from "@components/ProjectBox";
import { useState } from "react";

import projects from "../dummies/projects";

export default function Home() {
  const [showProject, setShowProject] = useState(projects[0]);
  const previous = () => {
    const index = projects.indexOf(showProject);
    if (index === 0) {
      setShowProject(projects[projects.length - 1]);
    } else {
      setShowProject(projects[index - 1]);
    }
  };

  const next = () => {
    const index = projects.indexOf(showProject);
    if (index === projects.length - 1) {
      setShowProject(projects[0]);
    } else {
      setShowProject(projects[index + 1]);
    }
  };

  return (
    <section className="relative mt-8 lg:mt-20 lg:flex">
      <AnimatedTextBox />
      <ProjectBox project={showProject} previous={previous} next={next} />
    </section>
  );
}
