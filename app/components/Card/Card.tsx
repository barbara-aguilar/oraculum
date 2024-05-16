import React from 'react';
import style from './Card.module.scss';
import Image from 'next/image';

export type CardProps = {
  name: string;
  frontImageUrl: string; // Imagem de frente
  isFlipped: boolean;
  description?: string;
  onClick?: () => void;
};

const Card = ({ name, frontImageUrl, isFlipped, onClick }: CardProps) => {
  return (
    <div className={`${style.containerCard} ${style.growRotateOnHover}`} onClick={onClick}>
      <div className="card-inner">
        <Image
          src={
            isFlipped
              ? 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
              : `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${frontImageUrl}`
          }
          alt={name}
          priority={true}
          width={81}
          height={170}
        />
      </div>
    </div>
  );
};

export default Card;
