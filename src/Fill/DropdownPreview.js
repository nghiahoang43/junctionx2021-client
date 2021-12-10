const DropdownPreview = (props) => {
    const saveOption = (event) => {
        let index = parseInt(event.target.name);
        props.options[index].option = event.target.value;
        props.onChangeOption(props.options);
    }

  return (
    <div>
      {Array.from(Array(props.count), (element, index) => {
        return (
          <input
            type="text"
            key={"option-" + index}
            placeholder={"Option " + (index + 1)}
            className="dropdown-input"
            name={index}
            defaultValue={props.options[index].option}
            onChange={saveOption}
          ></input>
        );
      })}
    </div>
  );
};

export default DropdownPreview;
