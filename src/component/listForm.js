import React, { useState, useEffect } from "react";
import "./listForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Label from "../Fill/Label";
import CheckBox from "../Fill/CheckBox";
import Radio from "../Fill/Radio";
import Dropdown from "../Fill/Dropdown";
import PhoneNumber from "../Fill/PhoneNumber";
import DropdownDevice from "../Fill/DropDownDevice";
import PreviewCard from "./PreviewCard";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const ListForm = () => {
  let navigate=useNavigate();
  function HandleClick() {
    navigate("/create-form")
  }
  const [width, setWidth] = useState(768);
  const [height, setHeight] = useState(1024);
  const [isForm1, setIsForm1] = useState(true);
  const [isForm2, setIsForm2] = useState(false);

  const setSize = (new_width, new_height) => {
    setWidth(new_width);
    setHeight(new_height);
  };

  const devices = [
    {
      id: 1,
      name: "Ipad",
      width: "768",
      height: "1024",
    },
    {
      id: 2,
      name: "Iphone X",
      width: "375",
      height: "812",
    },
    {
      id: 3,
      name: "Iphone 6/7/8 Plus",
      width: "414",
      height: "736",
    },
    {
      id: 4,
      name: "Iphone 6/7/8",
      width: "375",
      height: "667",
    },
    {
      id: 5,
      name: "Ipad Pro",
      width: "1024",
      height: "1366",
    },
  ];

  const [allForm, setAllForm] = useState([])

  const cards1 = [
    {
      id: 1,
      label: "Testing",
      type: "text",
      isRequired: true,
      options: [],
    },
    {
      id: 2,
      label: "Age",
      type: "phone-number",
      isRequired: false,
      options: [],
    },
    {
      id: 3,
      label: "Check Box 1",
      type: "radio",
      isRequired: true,
      options: [
        {
          id: 1,
          option: "Van",
        },
        {
          id: 2,
          option: "Hung",
        },
        {
          id: 3,
          option: "Hieu",
        },
      ],
    },
    {
      id: 4,
      label: "School",
      type: "text",
      isRequired: true,
      options: [],
    },
    {
      id: 5,
      label: "Date of Birth",
      type: "date",
      isRequired: false,
      options: [],
    },
    {
      id: 6,
      label: "Check Box 2",
      type: "check-box",
      isRequired: false,
      options: [
        {
          id: 1,
          option: "Nghia",
        },
        {
          id: 2,
          option: "Hoang",
        },
      ],
    },
    {
      id: 7,
      label: "Class",
      type: "drop-down",
      isRequired: true,
      options: [
        {
          id: 1,
          option: "",
        },
        {
          id: 2,
          option: "",
        },
        {
          id: 3,
          option: "",
        },
      ],
    },
  ];

  const cards2 = [
    {
      id: 1,
      label: "First Name",
      type: "text",
      isRequired: true,
      options: [],
    },
    {
      id: 2,
      label: "Choose Your Favourite",
      type: "drop-down",
      isRequired: false,
      options: [],
    },
    {
      id: 3,
      label: "What do you like?",
      type: "radio",
      isRequired: true,
      options: [
        {
          id: 1,
          option: "Playing",
        },
        {
          id: 2,
          option: "Studying",
        },
      ],
    },
    {
      id: 4,
      label: "School",
      type: "text",
      isRequired: true,
      options: [],
    },
    {
      id: 5,
      label: "Your favourite food",
      type: "check-box",
      isRequired: false,
      options: [
        {
          id: 1,
          option: "apple",
        },
        {
          id: 2,
          option: "banana",
        },
        {
          id: 3,
          option: "orange",
        },
      ],
    },
    {
      id: 6,
      label: "Which one is right",
      type: "check-box",
      isRequired: false,
      options: [
        {
          id: 1,
          option: "Left",
        },
        {
          id: 2,
          option: "Right",
        },
      ],
    },
  ];

  let allForms = [

      {
        title: "The First Form",
        cards: cards1,
      
    },
    
     {
        title: "Your Personal Information",
        cards: cards2,
      },
    
  ];

  useEffect(() => {
    const getAllForm = async () => {
      const response = await axios.get('http://localhost:8000/form');
      console.log(response.data.resources[0])
      setAllForm(response.data.resources[0]);
    };
    getAllForm();
  }, [])

  const set1 = () => {
    setIsForm1(true);
    setIsForm2(false);
  }
  const set2 = () => {
    setIsForm1(false);
    setIsForm2(true);
  }

  

  const createNewForm = async () => {
    const newForm = {
      title: 'New Form',
      cards: [],
    };
    let response = await axios.post("http://localhost:8000/form/create", newForm);
    console.log(response);
  }
  

  return (
    <div className="main_list_form_page">
      <div className="main_list_form_column1">
        <button className="create_form_btn" onClick={HandleClick}>Create new form</button>
        <div className="list_form">
            {/* {allForm.map((element, index) => {
              return(
              <button className="form-preview" value={element._id}>
                {(element.title)}
              </button>)
            })}
               */}
               <button className="form-preview" onClick={set1}>
                {(allForms[0].title)}
              </button>
              <button className="form-preview" onClick={set2}>
                {(allForms[1].title)}
              </button>
            
        </div>
      </div>
      <div className="main_list_form_column2">
        <div
          className="device"
          style={{ width: width + "px", height: height + "px" }}
        >
          {isForm1 ? (<PreviewCard cards={cards1}></PreviewCard>):<></>}
          {isForm2 ? (<PreviewCard cards={cards2}></PreviewCard>):<></>}
        </div>
      </div>
      <div className="main_list_form_column3">
        <button className="edit_form_btn">Edit</button>
        <button className="deactive_form_btn">Deactivate</button>
        <button className="delete_form_btn">Delete</button>
        <DropdownDevice
          devices={devices}
          count={devices.length}
          onSetSize={setSize}
        ></DropdownDevice>
      </div>
    </div>
  );
};
export default ListForm;
