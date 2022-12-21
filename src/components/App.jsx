import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.css';
import fetchImages from 'services/Api';
import ImageGallery from './ImageGallery/ImageGallery';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  async componentDidUpdate(_, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      try {
        const images = await fetchImages(query);
        this.setState({ images });
      } catch (error) {
        console.log(error);
      }
    }
  }

  getQuery = query => {
    this.setState({ query });
  };

  render() {
    const { images } = this.state;
    return (
      <div className={styles.container}>
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
