import { useState, useEffect } from 'react';
import { reorderCards } from '../utils/utils';

type DeckCard = {
  name: string;
  image: string;
  isFlipped?: boolean;
};

type DeckState = {
  initialDeck: DeckCard[];
};

const useDeckState = (data: DeckCard[], isInitialDeck: boolean): DeckState => {
  const [initialDeck, setInitialDeck] = useState<DeckCard[]>([]);

  useEffect(() => {
    setInitialDeck(data.map((card) => ({ ...card, isFlipped: false })));

    if (isInitialDeck) {
      setInitialDeck(reorderCards(data));
    }
  }, [data, isInitialDeck]);

  return { initialDeck };
};

export default useDeckState;