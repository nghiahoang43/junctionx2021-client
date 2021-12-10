const RequiredOption = (props) => {

    const changeRequired = (event) => {
        props.onHandleChange(event.target.value);
    }

    return (<div className="filter-part">
    <h4>Required/Optional</h4>
    <select
      className="required"
      defaultValue="required"
      onChange={changeRequired}
    >
      <option value="true">Required</option>
      <option value="false">Optional</option>
    </select>
  </div>)
}

export default RequiredOption;