import './CheckBox.css'

const CheckBox = (props) => {
    // console.log(props.options)
    const saveOption = (event) => {
        let index = parseInt(event.target.name);
        props.options[index].option = event.target.value;
        props.onChangeOption(props.options);
    }
    return (<div>
        <input className="checkbox-header" defaultValue={props.header}></input>
        {props.options.map((element, index) => {
            return (<div key={"checkbox-option"+element.id}><input type="checkbox"></input> <input className='checkbox-option' name={index} type="text" defaultValue={element.option} onChange={saveOption}></input></div>)
        })}
    </div>)
}

export default CheckBox;