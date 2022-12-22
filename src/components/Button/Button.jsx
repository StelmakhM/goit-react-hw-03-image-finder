import React from 'react';
import styles from './Button.module.css';

export default function Button({ loadMore }) {
  return (
    <button onClick={loadMore} className={styles.button}>
      LOAD MORE
    </button>
  );
}
