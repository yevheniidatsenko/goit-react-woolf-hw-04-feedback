import React from 'react';
import styles from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <section className={styles.wrapper}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </section>
  );
};
