import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import "./Cards.css";

const Cards = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <SingleCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Cards;
