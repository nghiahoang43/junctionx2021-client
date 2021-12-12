import './DropDownDevice.css'

const DropdownDevice = (props) => {

    const deviceSizeHandler = (event) => {
        // console.log(event.target.value);
        let index = event.target.value - 1;
        let width = props.devices[index].width;
        let height = props.devices[index].height;
        props.onSetSize(width, height);
    }
    return (<select
        className="drop-down-device"
        // onChange={changeType}
        defaultValue="text"
        placeholder="Field Type"
        onChange={deviceSizeHandler}
      >
        {/* <option value="2">2</option> */}
        {props.devices.map((element,index) => {
            return <option key={"device-"+index} value={element.id}>{element.name}</option>
        })}
        
      </select>)
}

export default DropdownDevice;