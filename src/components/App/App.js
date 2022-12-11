import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    searchName: '',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=30687510-2718d4bf03f80212b157b4ce9&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(response => response.json())
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    );
  }
}

export default App;
