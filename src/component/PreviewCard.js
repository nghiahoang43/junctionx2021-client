import React, { useState } from "react";
import "./listForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Label from "../Fill/Label";
import CheckBox from "../Fill/CheckBox";
import Radio from "../Fill/Radio";
import Dropdown from "../Fill/Dropdown";
import PhoneNumber from "../Fill/PhoneNumber";


const PreviewCard = (props) => {
    return(<div>{props.cards.map((element, index) => {
        switch (element.type) {
          case "text":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>

                <input
                  type="text"
                  placeholder="Enter text"
                  className="field-input"
                ></input>
              </div>
            );

          case "number":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>
                <input
                  type="number"
                  placeholder="Enter number"
                  className="field-input"
                ></input>
              </div>
            );

          case "date":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>
                <input type="date" className="field-input"></input>
              </div>
            );

          case "check-box":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>
                <CheckBox
                  header={"Choose something"}
                  options={element.options}
                ></CheckBox>
              </div>
            );
          case "drop-down":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>
                <Dropdown count={element.options}></Dropdown>
              </div>
            );
          case "radio":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>
                <Radio
                  header={"Choose something"}
                  options={element.options}
                ></Radio>
              </div>
            );
          case "phone-number":
            return (
              <div className="field-card">
                <div className="delete-btn-container">
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </button>
                </div>
                <Label
                  label={element.label}
                  isRequired={element.isRequired}
                ></Label>
                <PhoneNumber></PhoneNumber>
              </div>
            );
          default:
            break;
        }
      })}
      ;<button className="create-form-btn">Submit</button>
</div>)}

export default PreviewCard;