import React from "react";

function DropDownUI({ value, onChange, options }) {
  return (
    <select className='ui dropdown' value={value} onChange={onChange}>
      {options.map((m) => {
        return (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        );
      })}
    </select>
  );
}

export default DropDownUI;
