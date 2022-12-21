import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItemImage}
        src={webformatURL}
        alt="Image"
      />
    </li>
  );
}
