import styles from './styles/page.module.css';
import Deck from './components/Deck';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Deck />
      </div>
    </main>
  );
}
