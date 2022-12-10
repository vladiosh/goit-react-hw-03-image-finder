import { Bar, SearchForm, SearchFormButton } from './Searchbar.styled';

const SearchBar = () => {
  return (
    <Bar>
      <SearchForm>
        <SearchFormButton type="submit" className="button">
          <span className="button-label">Search</span>
        </SearchFormButton>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Bar>
  );
};

export default SearchBar;
