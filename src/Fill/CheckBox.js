import './CheckBox.css'

const CheckBox = (props) => {
    return (<div>
        <input className="checkbox-header" defaultValue={props.header}></input>
        {props.options.map((element, index) => {
            return (<div key={element.id}><input type="checkbox"></input> <input className='checkbox-option' type="text" defaultValue={element.option}></input></div>)
        })}
    </div>)
}

export default CheckBox;