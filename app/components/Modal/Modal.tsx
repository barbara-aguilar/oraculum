import { CardProps } from '../Card/Card';
import styles from './Modal.module.scss';

type ModalProps = {
  card: CardProps;
  onClose: () => void;
  
};


const Modal = ({ onClose, card }: ModalProps) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h2>You selected: {card.name}</h2>
        <p>{card.description}</p>
        <button className={styles.btn} onClick={() => onClose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
