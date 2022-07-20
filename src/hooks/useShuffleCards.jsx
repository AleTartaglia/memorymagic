import React from "react";
import { cardImages } from "../constants";

const useShuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));

  return shuffledCards;
};

export default useShuffleCards;
