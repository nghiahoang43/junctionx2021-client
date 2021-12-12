import "./createForm.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../Fill/Container";
import { useState } from "react";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateForm(props) {
  const [opacity, setOpacity] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [cards, setCards] = useState([
    // {
    //   id: 1,
    //   label: "Last Name",
    //   type: "text",
    //   isRequired: true,
    //   // count: 0,
    //   options: [],
    // },
    // {
    //   id: 2,
    //   label: "Age",
    //   type: "phone-number",
    //   isRequired: false,
    //   // count: 0,
    //   options: [],
    // },
    // {
    //   id: 3,
    //   label: "Check Box 1",
    //   type: "radio",
    //   isRequired: true,
    //   // count: 3,
    //   options: [
    //     {
    //       id: 1,
    //       option: "Van",
    //     },
    //     {
    //       id: 2,
    //       option: "Hung",
    //     },
    //     {
    //       id: 3,
    //       option: "Hieu",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   label: "School",
    //   type: "text",
    //   isRequired: true,
    //   // count: 0,
    //   options: [],
    // },
    // {
    //   id: 5,
    //   label: "Date of Birth",
    //   type: "date",
    //   isRequired: false,
    //   // count: 0,
    //   options: [],
    // },
    // {
    //   id: 6,
    //   label: "Check Box 2",
    //   type: "check-box",
    //   isRequired: false,
    //   // count: 2,
    //   options: [
    //     {
    //       id: 1,
    //       option: "Nghia",
    //     },
    //     {
    //       id: 2,
    //       option: "Hoang",
    //     },
    //   ],
    // },
    // {
    //   id: 7,
    //   label: "Class",
    //   type: "drop-down",
    //   isRequired: true,
    //   // count: 3,
    //   options: [
    //     {
    //       id: 1,
    //       option: "",
    //     },
    //     {
    //       id: 2,
    //       option: "",
    //     },
    //     {
    //       id: 3,
    //       option: "",
    //     },
    //   ],
    // },
  ]);

  const changeCard = (value) => {
    setCards(value);
  };

  const generateCard = (card) => {
    const index = cards.length;
    let options = [];
    for (let i = 0; i < card.count; i++) {
      options.push({
        id: i + 1,
        option: "",
      });
    }
    const newCard = {
      id: index + 1,
      label: card.label,
      type: card.type,
      isRequired: card.isRequired,
      options: options,
    };
    console.log(newCard);
    setCards([...cards, newCard]);
  };

  const changeOption = (id, options) => {
    cards.forEach((element) => {
      if (element.id === id) {
        element.options = options;
        // console.log(element.options)
      }
    });
  };

  const addButtonClick = () => {
    setOpacity(1 - opacity);
    if (rotate===45) {
      setRotate(0);
    }
    else {
      setRotate(45);
    }
  };

  return (
    <div className="App">
      <button
        style={{
          transform: `rotate(${rotate}deg)`
          ,
        }}
        className="create_field_btn"
        onClick={addButtonClick}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div style={{ opacity }}>
        <Option onAddCard={generateCard}></Option>
      </div>
      <DndProvider backend={HTML5Backend}>
        <Container
          cards={cards}
          onSetCards={changeCard}
          onChangeOption={changeOption}
        />
      </DndProvider>
    </div>
  );
}

export default CreateForm;
