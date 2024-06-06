'use client';
import React, { useState } from 'react';
import { shuffleCards } from '../../utils/utils';
import { CardProps } from '../Card';
import CardGrid from '../CardGrid';
import Modal from '../Modal';
import DeckMessage from '../DeckMessage';
import useFetchData from '../../hooks/useFetchData';
import useDeckState from '../../hooks/useDeckState';

import style from './index.module.scss';

const Deck = () => {
  const [isInitialDeck, setInitialDeck] = useState(true);
  const [showBackDeck, setShowBackDeck] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  const { data, isLoading, error } = useFetchData(
    'https://my-json-server.typicode.com/barbara-aguilar/oraculum-mock-server/cards'
  );

  const { initialDeck } = useDeckState(data, isInitialDeck);

  const handleCardClick = (card: React.SetStateAction<CardProps | null>) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  };

  const handleStartDeck = () => {
    setShowBackDeck(true);
    setInitialDeck(false);
    shuffleCards(initialDeck);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShowBackDeck(false);
    setInitialDeck(true);
  };

  return (
    <div className={style.container}>
      <CardGrid
        deck={initialDeck as CardProps[]}
        showBackDeck={showBackDeck}
        handleCardClick={showBackDeck ? handleCardClick : () => null}
      />
      <DeckMessage showBackDeck={showBackDeck} onStartDeck={handleStartDeck} />
      {isModalOpen && <Modal card={selectedCard!} onClose={handleModalClose} />}
    </div>
  );
};

export default Deck;
