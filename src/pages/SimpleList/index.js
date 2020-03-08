import React from 'react';

import { Container, Header, Search } from './styles';
import logo from '../../assets/images/logo.png';
import { ReactComponent as Icon } from '../../assets/icons/magnifying.svg';
import BurgerMenu from '../../components/BurgerMenu';
import CatFeed from '../../components/CatFeed';

function SimpleList() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="purrrfect match logo" />
        <Search>
          <Icon alt="search icon" />
          <input placeholder="Search cats" />
        </Search>
        <BurgerMenu />
      </Header>
      <CatFeed />
    </Container>
  );
}

export default SimpleList;
