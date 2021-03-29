import React, { ChangeEvent, useState } from 'react';
import styles from '../styles/components/CollapseCard.module.css';

interface PropsCollapse {
	collapseTitle: string;
	collapseContent: Array<string>;
	idCollapse: number;
}

const CollapseCard: React.FC<PropsCollapse> = (collapseProps) => {
	return (
		<div className={styles.collapsibleContainer}>
			<div className={styles.wrapCollabsible}>
				<input
					id={`${collapseProps.idCollapse}-collapsible`}
					className={styles.toggle}
					type="checkbox"
				/>
				<label
					htmlFor={`${collapseProps.idCollapse}-collapsible`}
					className={styles.lblToggle}
				>
					<label htmlFor={`${collapseProps.idCollapse}-collapsible-radio`} className={styles.labelContainerCheck}>
						<input
							type="radio"
							name={`${collapseProps.idCollapse}-collapsible-radio`}
							id={`${collapseProps.idCollapse}-collapsible-radio`}
						/>
						<span className={styles.checkmark}></span>
					</label>
					&nbsp;{collapseProps.collapseTitle}
				</label>
				<div className={styles.collapsibleContent}>
					<div className={styles.contentInner}>
						<ul>
							<li>{collapseProps.collapseContent[0]}</li>
							<li>{collapseProps.collapseContent[1]}</li>
							<li>{collapseProps.collapseContent[2]}</li>
						</ul>
						{collapseProps.children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollapseCard;
