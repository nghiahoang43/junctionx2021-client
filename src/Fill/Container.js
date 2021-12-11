import { useCallback } from "react";
import { Card } from "./Card";
import update from "immutability-helper";
import "./Container.css";


import React, { useEffect, useState } from "react";

export const Container = (props) => {
  const [buttonPopup,setButtonPopup] = useState(false); 
  const cards = props.cards;

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      props.onSetCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards, props]
  );
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        type={card.type}
        label={card.label}
        isRequired={card.isRequired}
        count={card.count}
        moveCard={moveCard}
      />
    );
  };
  
  return (
    <div className="new-container">
        <div className="container-header"><input type="text" defaultValue="New Form"></input></div>
      {cards.map((card, i) => renderCard(card, i))}
      <button className="create-form-btn">Create Form</button>
      

    </div>
  );
};
