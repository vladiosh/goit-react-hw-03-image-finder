import {
  Bar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Bar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span>
              <BiSearchAlt size="25px" />
            </span>
          </SearchFormButton>

          <SearchFormInput
            value={this.state.searchQuery}
            onChange={this.handleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Bar>
    );
  }
}

export default SearchBar;
