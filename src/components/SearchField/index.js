import React from 'react';

import { ReactComponent as Icon } from '../../assets/icons/magnifying.svg';
import { Search } from './styles';

function SearchField({ searchChange }) {
  return (
    <Search onSubmit={e => e.preventDefault()}>
      <Icon alt="search icon" />
      <input type="search" placeholder="Search cats" onChange={searchChange} />
    </Search>
  );
}

export default SearchField;
