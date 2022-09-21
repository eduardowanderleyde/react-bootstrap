import React from "react";

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend
        className="p-3 mb-2 bg-info text-dark"
        style={{ fontWeight: "bold" }}
      >
        {pergunta}
      </legend>
      {options.map((option) => (
        <label
          key={option}
          style={{
            marginBottom: "1rem",
            fontFamily: "monospace",
            marginLeft: "0.75rem",
          }}
        >
          <input
            className="form-check-input mt-0"
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
