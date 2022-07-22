/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import Input from "./Input";
import techs from "../../dummies/techs";

function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    repo: "",
    tech: [],
    thumbnail: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(form);
  };

  const handleChangeMulti = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setForm({ ...form, tech: value });
  };
  return (
    <form className="form-style my-0 mx-auto" onSubmit={handleSubmit}>
      <Input name="title" onChange={handleChange} value={form.title} />
      <Input
        name="description"
        onChange={handleChange}
        value={form.description}
      />
      <Input name="link" onChange={handleChange} value={form.link} />
      <Input name="repo" onChange={handleChange} value={form.repo} />
      <label htmlFor="tech" className="label-style">
        Tech
      </label>
      <select
        name="tech"
        multiple
        className="multiSelect-style border rounded-sm"
        onChange={handleChangeMulti}
        value={form.tech}
      >
        {techs.map((tech) => (
          <option
            key={tech.toLocaleLowerCase()}
            value={tech}
            className="text-black"
          >
            {tech}
          </option>
        ))}
      </select>
      <Input name="thumbnail" onChange={handleChange} value={form.thumbnail} />

      <button type="submit" className="submit-style">
        Submit
      </button>
    </form>
  );
}

export default ProjectForm;
