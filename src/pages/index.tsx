import Head from 'next/head';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infinity</title>
      </Head>
      <Header />
      <Buttons nextScreen="/personalizar" textButton="Continuar" back="" />
    </div>
  )
}

export default Home;
