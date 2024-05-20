'use client';
import React, { useState } from 'react';
import { CardsArray, shuffle } from '../../utils/utils';
import Card, { CardProps } from '../Card/Card';
import Modal from '../Modal/Modal';
import style from './CardDeck.module.scss';

const CardDeck = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBackDeck, setShowBackDeck] = useState(false);
  const [initialDeck, setinitialDeck] = useState(CardsArray);
  const [shuffledDeck, setShuffledDeck] = useState(CardsArray);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  const handleCardClick = (card: React.SetStateAction<CardProps | null>) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  };

  const handleDeckInitial = () => {
    setShowBackDeck(true);
    let shuffledCards = shuffle(shuffledDeck);
    setShuffledDeck(shuffledCards);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShowBackDeck(false);
    setinitialDeck(initialDeck);
  }

  return (
    <div className={style.container}>
      <div className={style.grid}>
        {CardsArray.map((card, index) => {
          return (
            <div key={index}>
              {showBackDeck ? (
                <div key={index}>
                  <Card
                    name={card.name}
                    image={card.image}
                    isFlipped={showBackDeck}
                    onClick={() => handleCardClick(card as unknown as CardProps)} 
                  />
                </div>
              ) : (
                <>
                  <Card name={card.name} image={card.image} isFlipped={showBackDeck} />
                </>
              )}
            </div>
          );
        })}
      </div>
      {!!showBackDeck && (
        <div className={style.content}>
          <h5 className={style.title}>
            Escolha uma carta acima e veja o que o Oraculum tem a dizer.
          </h5>
        </div>
      )}
      {!showBackDeck && (
        <div className={style.content}>
          <h5 className={style.title}>
            Oraculum te permite consultar a sorte do dia no tarot. Clique no botão abaixo para
            embaralhar as cartas e iniciar a consulta.
          </h5>
          <button className={style.btn} onClick={() => handleDeckInitial()}>
            Iniciar Oraculum
          </button>
        </div>
      )}
    {isModalOpen && <Modal card={selectedCard!} onClose={handleModalClose} />}
    </div>
  );
};

export default CardDeck;
