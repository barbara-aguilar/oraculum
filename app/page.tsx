import styles from './page.module.css';
import CardDeck from './components/CardDeck/CardDeck';

export default function Home() {
  

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CardDeck />
      </div>
    </main>
  );
}

