'use client';
import React, { useState, useEffect } from 'react';
import { initializeCardsArray, CardsArray, getCardProps, shuffle } from '../../utils/utils';
import style from './CardDeck.module.scss';
import CardDeckBack from './CardDeckBack';
import CardDeckFront from './CardDeckFront';

const CardDeck = () => {
  const [backDeck, setbackDeck] = useState<number[]>([]);
  const [showBackDeck, setShowBackDeck] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  const handleCloseCardModal = () => {
    setShowCardModal(false);
  };

  const populateBackDeck = () => {
    const cards = initializeCardsArray();
    setbackDeck(cards);
  };

  const handleDeckInitial = () => {
    populateBackDeck();
    setShowBackDeck(true);
    let shuflledDeck = CardsArray;
    shuffle(shuflledDeck);
  };

  return (
    <div className={style.container}>
      {showBackDeck ? (
        <>
          <div className={style.grid}>
            <CardDeckBack cards={backDeck} />
          </div>
          <div className={style.content}>
            <h5 className={style.title}>Escolha uma carta para iniciar a consulta.</h5>
          </div>
        </>
      ) : (
        <>
          <div className={style.grid}>
            <CardDeckFront cards={getCardProps(CardsArray)} />
          </div>
          <div className={style.content}>
            <h5 className={style.title}>
              Oraculum te permite consultar a sorte do dia no tarot. Clique no botão abaixo para
              embaralhar as cartas e iniciar a consulta.
            </h5>
            <button className={style.btn} onClick={() => handleDeckInitial()}>
              Iniciar Oraculum
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDeck;
