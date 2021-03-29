import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Buttons.module.css';

interface PropsButtons {
	back?: string;
	nextScreen: string;
	textButton: string;
}

const Buttons: React.FC<PropsButtons> = (propsBtn) => {
	return (
		<div className={styles.btnContainer}>
			<Link href={propsBtn.nextScreen}>
				<button type="submit">{propsBtn.textButton}</button>
			</Link>
			<Link href={propsBtn.back}>
				<button type="button">Voltar</button>
			</Link>
		</div>
	);
};

export default Buttons;
