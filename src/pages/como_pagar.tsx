import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/ComoPagar.module.css';
import CollapseCard from '../components/CollapseCard';
import Buttons from '../components/Buttons';
import Header from '../components/Header'; 

const ComoPagar: React.FC = () => {
  return (
    <section className={styles.paymentContainer}>
      <Head>
        <title>Infinity - Como Pagar?</title>
      </Head>
      <Header />
      <h3>Como deseja pagar?</h3>
      <CollapseCard idCollapse={1} collapseTitle="Mensal" collapseContent={['R$ 40,00','Por mês']} />
      <CollapseCard idCollapse={2} collapseTitle="Trimestral" collapseContent={['R$ 40,00','Por mês']} />
      <CollapseCard idCollapse={3} collapseTitle="Anual" collapseContent={['R$ 40,00','Por mês']} />
      <Buttons back="/personalizar" nextScreen="/resumo" textButton="Assinar" />
    </section>
  );
}

export default ComoPagar;