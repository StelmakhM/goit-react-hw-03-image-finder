import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
