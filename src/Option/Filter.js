import "./Filter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import LabelOption from "./FilterOption/LabelOption";
import TypeOption from "./FilterOption/TypeOption";
import RequiredOption from "./FilterOption/RequiredOption";

const Filter = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isRadio, setIsRadio] = useState(false);
  const [newCard, setNewCard] = useState({
    label: "New Label",
    type: "text",
    isRequired: true,
    count: 0,
  });

  const handleLabelChange = (value) => {
    setNewCard({
      ...newCard,
      label: value,
    });
  };

  const handleTypeChange = (value) => {
    if (value === "drop-down") {
      setIsDropdown(true);
      newCard.count = 2;
    } else {
      setIsDropdown(false);
    }
    if (value === "check-box") {
      setIsCheckbox(true);
      newCard.count = 2;
    } else {
      setIsCheckbox(false);
    }
    if (value === "radio") {
      setIsRadio(true);
      newCard.count = 2;
    } else {
      setIsRadio(false);
    }

    setNewCard({
      ...newCard,
      type: value,
    });
  };

  const handleRequiredChange = (value) => {
    setNewCard({
      ...newCard,
      isRequired: value === "true" ? true : false,
    });
  };

  const handleCount = (event) => {
    if (event.target.value < event.target.defaultValue) {
      event.target.value = event.target.defaultValue;
    }

    setNewCard({
      ...newCard,
      count: parseInt(event.target.value),
    });
  };

  const createNewCard = () => {
    props.onCreateNewCard(newCard);
  };

  return (
    <div className="form-filter">
      <h2>Create New Form</h2>
      <LabelOption onHandleChange={handleLabelChange} />
      <TypeOption onHandleChange={handleTypeChange} />
      {isDropdown ? (
        <div className="filter-part">
          <h4>Number of Options</h4>
          <input
            className="label-input"
            type="number"
            defaultValue="2"
            onChange={handleCount}
          ></input>
        </div>
      ) : (
        <></>
      )}
      {isCheckbox ? (
        <div className="filter-part">
          <h4>Number of Checkboxes</h4>
          <input
            className="label-input"
            type="number"
            defaultValue="1"
            onChange={handleCount}
          ></input>
        </div>
      ) : (
        <></>
      )}
      {isRadio ? (
        <div className="filter-part">
          <h4>Number of Options</h4>
          <input
            className="label-input"
            type="number"
            defaultValue="2"
            onChange={handleCount}
          ></input>
        </div>
      ) : (
        <></>
      )}
      <RequiredOption onHandleChange={handleRequiredChange} />
      <button className="add-card-btn" onClick={createNewCard}>
        Generate
      </button>
    </div>
  );
};

export default Filter;
