import React from 'react';
import Head from 'next/head';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import BenefitsArray from '../data/benefits';
import styles from '../styles/pages/Personalizar.module.css';


const Personalizar: React.FC = () => {
  return (
    <div className={styles.checksContainer}>
      <Head>
        <title>Infinity - Personalizável</title>
      </Head>
      <Header />
      <h3>Personalize seu plano</h3>
      <div>

        {BenefitsArray.map((item) => (
          <section>
            <>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item}</label>
            </>
          </section>
        ))}
      </div>

      <Buttons nextScreen="/como_pagar" back="/" textButton="Continuar" />
    </div>

  );
}

export default Personalizar;