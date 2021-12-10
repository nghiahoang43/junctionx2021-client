import React,{ useState } from "react";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import './Radio.css'
const Radio = (props) => {
    const [textColor, setTextColor] = useState('red');
    console.log(props)
    return(<Menu  menuButton={<MenuButton className="radio-header">{props.header} <i>(click here)</i></MenuButton>}>
        <MenuRadioGroup className="radio-box" value={textColor}
            onRadioChange={e => setTextColor(e.value)}>
                
            {/* <MenuItem value="red">Red</MenuItem>
            <MenuItem value="green">Green</MenuItem>
            <MenuItem value="blue">Blue</MenuItem> */}
            {props.options.map((element, index) => {
            return (<MenuItem key={index} value={element.option}>{element.option}</MenuItem>)
        })}
        </MenuRadioGroup>
    </Menu>
    )
}

export default Radio;