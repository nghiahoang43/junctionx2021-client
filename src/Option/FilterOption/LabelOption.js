const LabelOption = (props) => {
    const setNewLabel = (event) => {
        props.onHandleChange(event.target.value);
    }

    return (<div className='filter-part'>
    <h4>Field Label</h4>
    <input className="label-input" type="text" placeholder="Label" onChange={setNewLabel}></input>
  </div>)
}

export default LabelOption