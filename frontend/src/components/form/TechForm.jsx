import { useState } from "react";
import Input from "./Input";

function TechForm() {
  const [form, setForm] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(form);
  };
  return (
    <form className="form-style my-0 mx-auto" onSubmit={handleSubmit}>
      <Input name="name" onChange={handleChange} value={form.name} />
      <button type="submit" className="submit-style">
        Submit
      </button>
    </form>
  );
}

export default TechForm;
