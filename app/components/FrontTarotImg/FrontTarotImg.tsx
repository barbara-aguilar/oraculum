import React from 'react';
import Image from 'next/image';

type FrontTarotImgProps = {
    imageUrl: string;
};

const FrontTarotImg = ({imageUrl} : FrontTarotImgProps) => {
  return (
    <Image
      src={
        `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${imageUrl}`
      }
      alt="image"
      width={81}
      height={170}
    />
  );
};

export default FrontTarotImg;
