import React, { useState } from "react";
import "./Radio.css";
const Radio = (props) => {
  const [value, setValue] = useState(props.options[0]);
  return (
    <div className="">
      <h1>{props.header}</h1>
      <div className="radio-btn-container">
        {props.options.map((element, index) => {
          return (
            <div
                key={index}
              className="radio-btn"
              onClick={() => {
                setValue(element.option);
              }}
            >
              <input type="radio" value={value} checked={value === element.option} readOnly/>
               <span> {element.option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
