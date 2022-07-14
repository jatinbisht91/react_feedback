import React, { useState } from "react";


function Rating({select,selected}) {

    const handlechange=(e)=>{
            select(+e.currentTarget.value)
    }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            onChange={handlechange}
            checked={selected === i + 1}
            name="rating"
            id={`num${i+1}`}
            value={i+1}
          />
          <label htmlFor={`num${i+1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default Rating;
