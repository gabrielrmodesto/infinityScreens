import Head from 'next/head';
import Buttons from '../components/Buttons';
import CollapseCard from '../components/CollapseCard';
import Header from '../components/Header';
import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Infinity</title>
        </Head>
        <Header />
        <main>

          <CollapseCard
            idCollapse={1}
            collapseTitle="Plano Básico"
            collapseContent={
              [
                '- Pré-venda exclusiva',
                '- Cupons de desconto',
                '- Entrega expressa'
              ]
            }
          />
          <CollapseCard
            idCollapse={2}
            collapseTitle="Plano Gold"
            collapseContent={
              [
                '- Cashback turbo',
                '- Cupons de desconto',
                '- Entrega grátis'
              ]
            }
          />
          <CollapseCard
            idCollapse={3}
            collapseTitle="Plano Premium"
            collapseContent={
              [
                '- Personalizável',
                '- Cashback turbo',
                '- Entrega expressa'
              ]
            }
          />
        </main>
      <footer className={styles.footer}>
        <Buttons nextScreen="/personalizar" textButton="Continuar" back="" />
      </footer>
      </div>
    </>
  )
}

export default Home;
