import React from 'react';
import styles from '../styles/components/Badge.module.css';

interface BadgeProps{
    text: string;
}

const Badge: React.FC<BadgeProps> = (props) => {
  return (
      <div className={styles.badgeContainer}>
          <span>{props.text}</span>
      </div>
  );
}

export default Badge;