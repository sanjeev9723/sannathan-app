import React from "react";
import { useState } from "react";

function Select({ label, initialValue = "", change, onChange,value,inputArry=[] }) {
//   const gender = {'Male', 'Female'}
  const [selectedValue, setSelectedValue] = useState(initialValue);
  console.log(inputArry);
  function onChange(e) {
    setSelectedValue(e.target.value);
    change(e.target.value);
  }

  return (
    <div>
      <label for="name" className="form-label">
        {label}
      </label>
      <select className="form-select" onChange={onChange}>
       
        {inputArry.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
