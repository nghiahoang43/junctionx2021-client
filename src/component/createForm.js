import "./createForm.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../Fill/Container";
import { useState } from "react";
import Option from "../Option/Option";


function CreateForm(props) {
  const [opacity, setOpacity] = useState(0);
  const [cards, setCards] = useState([
    {
      id: 1,
      label: "Last Name",
      type: "text",
      isRequired: true,
      count: 0,
    },
    {
      id: 2,
      label: "Age",
      type: "phone-number",
      isRequired: false,
      count: 0,
    },
    {
      id: 3,
      label: "Check Box 1",
      type: "radio",
      isRequired: true,
      count: 3,
    },
    {
      id: 4,
      label: "School",
      type: "text",
      isRequired: true,
      count: 0,
    },
    {
      id: 5,
      label: "Date of Birth",
      type: "date",
      isRequired: false,
      count: 0,
    },
    {
      id: 6,
      label: "Check Box 2",
      type: "check-box",
      isRequired: false,
      count: 2,
    },
    {
      id: 7,
      label: "Class",
      type: "drop-down",
      isRequired: true,
      count: 3,
    },
  ]);

  const changeCard = (value) => {
    setCards(value);
  };

  const generateCard = (card) => {
    const index = cards.length;
    const newCard = {
      id: index + 1,
      label: card.label,
      type: card.type,
      isRequired: card.isRequired,
      count: card.count,
    };
    setCards([...cards, newCard]);
  };

  
  return (
    <div className="create_form">
      <button className="create_field_btn" onClick={() => setOpacity(1-opacity)}>ADD</button>
        <div style={{ opacity }}><Option  onAddCard={generateCard}></Option> </div>
      <DndProvider backend={HTML5Backend}>
        <Container cards={cards} onSetCards={changeCard}/>
      </DndProvider>
    </div>
  );
}

export default CreateForm;
