import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="icons/menu.svg" alt="Menu bar"/>
      <h3>Infinity</h3>
    </header>
  );
}
