import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProjectBox({ project, previous, next }) {
  const { title, description, image, link, techs, repo } = project;
  return (
    <figure className="text-center mt-16 lg:flex-grow lg:mt-0">
      <picture className="box-img p-4 flex items-center justify-center gap-6">
        <button type="button" onClick={previous} className="text-5xl">
          &larr;
        </button>
        <Link to={link}>
          <img
            src={image}
            alt="project-title"
            className=" object-contain w-[200px] h-[200px] my-0 mx-auto lg:w-[400px] lg:h-[400px] rounded-full"
          />
        </Link>
        <button type="button" onClick={next} className="text-5xl">
          &rarr;
        </button>
      </picture>
      <figcaption>
        <h3>{title}</h3>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-500 hover:text-blue-700"
        >
          Github
        </a>
        <p>{description}</p>
        <ul className="project-tags flex flex-wrap p-3 gap-2 justify-center">
          {techs.map((tag) => (
            <li className="tag-style">{tag}</li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

ProjectBox.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default ProjectBox;
