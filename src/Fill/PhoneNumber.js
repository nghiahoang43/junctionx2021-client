import { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import './PhoneNumber.css'

const PhoneNumber = () => {
    const [value, setValue] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
    )
}

export default PhoneNumber;