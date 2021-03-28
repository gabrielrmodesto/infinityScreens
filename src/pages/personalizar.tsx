import React, { useState } from 'react';
import Head from 'next/head';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import BenefitsArray from '../data/benefits';
import styles from '../styles/pages/Personalizar.module.css';


const Personalizar: React.FC = () => {
  const [value, setValue] = useState(0);

  function checkClicked() {
    setValue(value + 10);
  }
  return (
    <div className={styles.checksContainer}>
      <Head>
        <title>Infinity - Personalizável</title>
      </Head>
      <Header />
      <h3>Personalize seu plano</h3>
      <div>

        {BenefitsArray.map((item) => (
          <section key={item}>
            <>
              <input type="checkbox" name="itemList" id="itemList" onClick={checkClicked} />
              <label htmlFor="itemList">{item}</label>
            </>
          </section>
        ))}
      </div>
      {value > 0 && (
        <span><strong>Valor Parcial: </strong>R$ {value},00</span>
      )}
      <Buttons nextScreen="/como_pagar" back="/" textButton="Continuar" />
    </div>

  );
}

export default Personalizar;