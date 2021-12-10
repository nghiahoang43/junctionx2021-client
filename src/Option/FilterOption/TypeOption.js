const TypeOption = (props) => {

    const changeType = (event) => {
        props.onHandleChange(event.target.value);
    }

    return (<div className="filter-part">
    <h4>Field Type</h4>
    <select
      className="drop-down-filter"
      onChange={changeType}
      defaultValue="text"
      placeholder="Field Type"
    >
      <option value="text">Text</option>
      <option value="number">Number</option>
      <option value="phone-number">Phone Number</option>
      <option value="date">Date</option>
      <option value="drop-down">Dropdown</option>
      <option value="check-box">Checkbox</option>
      <option value="radio">Radio</option>
    </select>
  </div>)
}

export default TypeOption;