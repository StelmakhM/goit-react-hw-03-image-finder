import styles from './Modal.module.css';
import React, { Component } from 'react';

export default class Modal extends Component {
  hideModal = e => {
    if (e.code === 'Escape') {
      this.props.hideModal();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget != e.target) {
      return;
    }
    this.props.hideModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hideModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModal);
  }

  render() {
    const { url } = this.props;
    return (
      <div onClick={this.onBackdropClick} className={styles.overlay}>
        <div className={styles.modal}>
          <img src={url} alt="Image" width="900" />
        </div>
      </div>
    );
  }
}
