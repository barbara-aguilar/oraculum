import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  selectedCardName: string;
  selectedCardDescription: string;
  handleClose: () => void;
};

const Modal = ({ children, handleClose, selectedCardName, selectedCardDescription }: ModalProps) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        {children}
        <h2>You selected: {selectedCardName}</h2>
        <p>{selectedCardDescription}</p>
        <button className={styles.btn} onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
