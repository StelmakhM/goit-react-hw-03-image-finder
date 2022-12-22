import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.css';
import fetchImages from 'services/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';

import React, { Component } from 'react';

const INITIAL_STATE = {
  query: '',
  page: 1,
  images: [],
  showModal: false,
  largeImageURL: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        const newImages = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  onSubmit = query => {
    this.setState({ ...INITIAL_STATE, query });
  };

  showModal = e => {
    const largeImageURL = e.target.dataset.url;
    this.setState({ largeImageURL, showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, showModal, largeImageURL } = this.state;
    return (
      <div className={styles.container}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} showModal={this.showModal} />
        {showModal && <Modal url={largeImageURL} hideModal={this.hideModal} />}
        {images.length > 0 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
