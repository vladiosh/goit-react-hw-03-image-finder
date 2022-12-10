import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
import SearchBar from '../Searchbar/Searchbar';

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}

export default App;
