import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../../servises/fetch';
import SearchBar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchName } = this.state;

    if (prevState.searchName !== searchName) {
      console.log('сменился запрос в поле поиска');

      try {
        const searchImages = await fetchImages(searchName);
        console.log(searchImages);
        this.setState(({ images }) => {
          return {
            images: [...images, ...searchImages],
          };
        });
      } catch (error) {
        toast.error('Something went wrong');
      }
    }
  }

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    const { images } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery images={images} />}
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    );
  }
}

export default App;
