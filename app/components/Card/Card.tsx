import React from 'react';
import style from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Card = ({ children, onClick }: CardProps) => {
  return (
    <div className={`${style.containerCard} ${style.growRotateOnHover}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
