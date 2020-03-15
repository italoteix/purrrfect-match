import React from 'react';

import { ReactComponent as Icon } from '../../assets/icons/magnifying.svg';
import { Search } from './styles';

function SearchField({ onSearch }) {
  return (
    <Search onSubmit={event => event.preventDefault()}>
      <Icon alt="search icon" />
      <input type="search" placeholder="Search cats" onChange={onSearch} />
    </Search>
  );
}

export default SearchField;
