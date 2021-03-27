import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infinity</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home;
