import Head from 'next/head';
import React from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import styles from '../styles/pages/Resumo.module.css';
import BenefitsOfPlan from '../data/benefitsOfPlan';

const Resumo: React.FC = () => {
  return (
    <div className={styles.resumoContainer}>
      <Head>
        <title>Infinity - Resumo</title>
      </Head>
      <Header />
      <h3>Resumo do plano escolhido</h3>

      {BenefitsOfPlan.map((item) => (
        <section>
          <img src="icons/confirm.svg" alt="" />
          <span>{item}</span>
        </section>
      ))}
      <p>
        <span><strong>Duração do Plano:</strong> Anual</span>
        <span><strong>Valor Mensal: </strong>R$ 30,00</span>
      </p>
      <Buttons back="/como_pagar" nextScreen="/" textButton="Ir às compras" />
    </div>
  );
}

export default Resumo;