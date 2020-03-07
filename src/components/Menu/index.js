import React from 'react';
import { StyledMenu } from './styles';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Cat feed</a>
      <a href="/">Cat list</a>
      <a href="/">Add new cat</a>
    </StyledMenu>
  );
};
export default Menu;
