import './Label.css'

const Label = (props) => {
    return<div><input type="text" className="label" defaultValue={props.label}></input>{props.isRequired ? (<div className='label-required'><span>*Required</span></div>):<></>}</div>;
}

export default Label;