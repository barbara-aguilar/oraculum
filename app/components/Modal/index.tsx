import { CardProps } from '../Card';
import Image from 'next/image';

import styles from './index.module.scss';

type ModalProps = {
  card: CardProps;
  onClose: () => void;
};

const Modal = ({ onClose, card }: ModalProps) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalLayout}>
          <div className={styles.imageContainer}>
            <Image
              src={`https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${card.image}`}
              alt={card.name}
              priority={true}
              width={162}
              height={340}
            />
          </div>
          <h2 className={styles.title}>{card.name}</h2>
          <p className={styles.description}>{card.description}</p>
          <span className={styles.btn} onClick={() => onClose()}>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
