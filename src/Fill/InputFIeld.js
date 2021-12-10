import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";

const InputField = (props) => {
    switch (props.type) {
        case "text":
          return (
              
              <input
                type="text"
                placeholder="Enter text"
                className="field-input"
              ></input>
          );
    
        case "number":
          return (
              <input
                type="number"
              placeholder="Enter number"
                className="field-input"
              ></input>
          );
    
        case "date":
          return (
              <input
                type="date"
                className="field-input"
              ></input>
          );
    
        case "check-box":
          return (
              <CheckBox header={"Choose something"} options={props.options}></CheckBox>

          );
        case "drop-down":
          return (
              <Dropdown count={props.count}></Dropdown>)

        default:
          break;
      }
    return
}

export default InputField;