import React from 'react';
import style from './index.module.scss';

type DeckMessageProps = {
  showBackDeck: boolean;
  onStartDeck: () => void;
};

const DeckMessage = ({ showBackDeck, onStartDeck }: DeckMessageProps) => (
  <div className={style.content}>
    <h5 className={style.title}>
      {showBackDeck
        ? 'Escolha uma carta acima e veja o que o Oraculum tem a dizer.'
        : 'Oraculum te permite consultar a sorte do dia no tarot. Clique no botão abaixo para embaralhar as cartas e iniciar a consulta.'}
    </h5>
    {!showBackDeck && (
      <button className={style.btn} onClick={onStartDeck}>
        Iniciar Oraculum
      </button>
    )}
  </div>
);

export default DeckMessage;
