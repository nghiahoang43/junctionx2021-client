import './Dropdown.css'

const Dropdown = (props) => {
    // console.log(props);
    return (<select
        className="drop-down"
        // onChange={changeType}
        defaultValue="text"
        placeholder="Field Type"
      >
        {/* <option value="2">2</option> */}
        {Array.from(Array(props.count), (element, index) => {
            return <option key={index} value={index}>Option {index+1}</option>
        })}
        
      </select>)
}

export default Dropdown;