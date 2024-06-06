import React from 'react';
import Card, { CardProps } from '../Card';
import style from './index.module.scss';

export type cardGridProps = {
  deck: CardProps[];
  showBackDeck: boolean;
  handleCardClick: (card: CardProps) => void;
};

const CardGrid = ({ deck, showBackDeck, handleCardClick }: cardGridProps) => (
  <div className={style.grid}>
    {deck.map((card, index) => (
      <div key={index}>
        <Card
          name={card.name}
          image={card.image}
          isFlipped={showBackDeck}
          onClick={() => handleCardClick(card)}
        />
      </div>
    ))}
  </div>
);

export default CardGrid;
