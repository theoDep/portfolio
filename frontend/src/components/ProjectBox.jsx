import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProjectBox({ project, previous, next }) {
  const { title, description, image, link, tags } = project;
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
            className=" object-contain max-w-[200px] my-0 mx-auto lg:max-w-[400px] rounded-full"
          />
        </Link>
        <button type="button" onClick={next} className="text-5xl">
          &rarr;
        </button>
      </picture>
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project-tags flex flex-wrap p-3 gap-2 justify-center">
          {tags.map((tag) => (
            <li key={tag.id} className="tag-style">
              {tag.name}
            </li>
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
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default ProjectBox;
