import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./Card.css";
import CheckBox from "./CheckBox";
// import Dropdown from "./Dropdown";
import Radio from "./Radio";
import Label from "./Label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PhoneNumber from "./PhoneNumber";
import DropdownPreview from './DropdownPreview'

export const Card = ({ id, type, label, isRequired, options, index, moveCard, remove, onChangeOptionContainer }) => {
  // console.log(label)
  // console.log(options)
  // options = [];
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // console.log(hoverBoundingRect)
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  
  const deleteHandler = (event) => {
    // remove(id);
    // console.log(id)
  }

  const changeOptionCard = (options) => {
    // console.log(options)
    onChangeOptionContainer(id, options)
  }

  drag(drop(ref));
  switch (type) {
    case "text":
      return (
        <div
          ref={ref}
          style={{ opacity: opacity }}
          className="field-card"
          data-handler-id={handlerId}
        >
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          
          <input
            type="text"
            placeholder="Enter text"
            className="field-input"
          ></input>
        </div>
      );

    case "number":
      return (
        <div
          ref={ref}
          style={{ opacity: opacity }}
          className="field-card"
          data-handler-id={handlerId}
        >
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          <input
            type="number"
          placeholder="Enter number"
            className="field-input"
          ></input>
        </div>
      );

    case "date":
      return (
        <div
          ref={ref}
          style={{ opacity: opacity }}
          className="field-card"
          data-handler-id={handlerId}
        >
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          <input
            type="date"
            className="field-input"
          ></input>
        </div>
      );

    case "check-box":
      return (
        <div 
        ref={ref}
        style={{ opacity: opacity }}
        className="field-card"
        data-handler-id={handlerId}>
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          <CheckBox header={"Choose something"} options={options} onChangeOption={changeOptionCard}></CheckBox>
        </div>
      );
    case "drop-down":
      return (<div 
        ref={ref}
        style={{ opacity: opacity }}
        className="field-card"
        data-handler-id={handlerId}>
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          {/* <Dropdown count={count}></Dropdown>
           */}
           <DropdownPreview count={options.length} options={options} onChangeOption={changeOptionCard}></DropdownPreview>
           
           
        </div>)
    case "radio":
      return (<div 
        ref={ref}
        style={{ opacity: opacity }}
        className="field-card"
        data-handler-id={handlerId}>
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          <Radio header={"Choose something"} options={options} onChangeOption={changeOptionCard}></Radio>
        </div>)
    case "phone-number":
      return (<div 
        ref={ref}
        style={{ opacity: opacity }}
        className="field-card"
        data-handler-id={handlerId}>
          <div className="delete-btn-container"><button className="delete-btn" onClick={deleteHandler} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button></div>
          <Label label={label} isRequired={isRequired}></Label>
          <PhoneNumber></PhoneNumber>
        </div>)
    default:
      break;
  }
};
