import {
  Bar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <Bar>
      <SearchForm>
        <SearchFormButton type="submit">
          <span>
            <BiSearchAlt size="25px" />
          </span>
        </SearchFormButton>

        <SearchFormInput
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
