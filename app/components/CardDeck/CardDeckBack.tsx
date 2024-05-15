import React from 'react';
import Card from '../Card/Card';
import BackTarotImg from '../BackTarotImg/BackTarotImg';

type cardsProps = {
  cards: number[];
};

const CardDeckBack = ({ cards }: cardsProps) => {
  return (
    <>
      {cards.map((index) => {
        return (
          <Card key={index}>
            <BackTarotImg />
          </Card>
        );
      })}
    </>
  );
};

export default CardDeckBack;
