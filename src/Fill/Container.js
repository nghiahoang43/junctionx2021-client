import { useCallback } from "react";
import { Card } from "./Card";
import update from "immutability-helper";
import "./Container.css";

export const Container = (props) => {
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

  const changeOptionContainer = (id, options) => {
    props.onChangeOption(id, options);
  }
  // console.log(cards);
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        type={card.type}
        label={card.label}
        isRequired={card.isRequired}
        options={card.options}
        moveCard={moveCard}
        onChangeOptionContainer={changeOptionContainer}
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
