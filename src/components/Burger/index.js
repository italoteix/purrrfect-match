import React from 'react';
import { StyledBurger } from './styles';

const Burger = ({ open, onClick }) => {
  return (
    <StyledBurger open={open} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
