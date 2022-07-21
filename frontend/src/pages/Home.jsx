import AnimatedTextBox from "@components/AnimatedTextBox";
import ProjectBox from "@components/ProjectBox";
import { useProjectContext } from "../contexts/ProjectContext";
import spinner from "../assets/images/spinner.svg";

export default function Home() {
  const { showProject, next, previous } = useProjectContext();
  const { currentProject } = showProject;

  return (
    <section className="relative mt-8 lg:mt-20 lg:flex">
      <AnimatedTextBox />
      {currentProject ? (
        <ProjectBox project={currentProject} previous={previous} next={next} />
      ) : (
        <div>
          <img src={spinner} alt="loading" />
        </div>
      )}
    </section>
  );
}
