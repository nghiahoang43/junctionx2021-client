import Filter from "./Filter";
import { useState } from "react";
import './Option.css'

const Option = (props) => {
    const [value, setValue] = useState('');

    const printSelectValue = (newValue) => {
        setValue(newValue);
        console.log(value);
    }

    const addCard = (card) => {
        props.onAddCard(card);
    }
    return (<div className="option">
        <Filter onSelectValue = {printSelectValue} onCreateNewCard = {addCard}></Filter>
    </div>)
}

export default Option;