import React, { useState } from "react";
import "./Radio.css";
const Radio = (props) => {
  const [value, setValue] = useState(props.options[0]);
  const saveOption = (event) => {
    let index = parseInt(event.target.name);
    props.options[index].option = event.target.value;
    props.onChangeOption(props.options);
}
  return (
    <div>
      <input className="checkbox-header" type="text" defaultValue={props.header}></input>
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
              <input className="checkbox-option" name={index} type="text" defaultValue={element.option} onChange={saveOption}></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
