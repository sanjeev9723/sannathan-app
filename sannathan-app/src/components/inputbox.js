import React from "react";
import { useState } from "react";

function Inputbox({ label, type, initialValue = "", change }) {
  const [values, setValues] = useState(initialValue);
  function handleChange(e) {
    setValues(e.target.value);
    change(e.target.value);
  }

  return (
    <div>
      <label for="name" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name="label"
        id="inputName"
        value={values}
        onChange={handleChange}

        // required
      />
    </div>
  );
}

export default Inputbox;
