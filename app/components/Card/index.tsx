import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

export type CardProps = {
  name: string;
  image: string;
  isFlipped: boolean;
  description?: string;
  onClick?: () => void;
};

const Card = ({ name, image, isFlipped, onClick }: CardProps) => {
  return (
    <div className={`${style.containerCard} ${style.growRotateOnHover}`} onClick={onClick}>
      <Image
        src={
          isFlipped
            ? 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
            : `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${image}`
        }
        alt={name}
        priority={true}
        width={81}
        height={170}
      />
    </div>
  );
};

export default Card;
