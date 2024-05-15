import React from 'react';
import Card from '../Card/Card';
import FrontTarotImg from '../FrontTarotImg/FrontTarotImg';

type CardDeckFrontProps = {
  cards: {
    image: string;
  }[],
};

const CardDeckFront = ({ cards }: CardDeckFrontProps) => {
  return (
    <>
      {cards.map((card, index) => {
        return (
          <Card key={index}>
            <FrontTarotImg imageUrl={card.image}  />
          </Card>
        );
      })}
    </>
  );
};

export default CardDeckFront;
