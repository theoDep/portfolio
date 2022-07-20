/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";

function Input({ type, name, value, onChange, placeholder }) {
  return (
    <>
      <label htmlFor={name} className="label-style">
        {name}
      </label>
      <input
        className="input-style"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  name: "",
  value: "",
  onChange: () => {},
  placeholder: "",
};
export default Input;
