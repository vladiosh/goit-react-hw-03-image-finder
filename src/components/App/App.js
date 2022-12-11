import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
import SearchBar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
    loading: false,
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
        <SearchBar />
      </Container>
    );
  }
}

export default App;
