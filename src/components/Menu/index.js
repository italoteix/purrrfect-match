import React from 'react';
import { StyledMenu } from './styles';

function Menu(props) {
  const { open, setOpen, isCatList } = props;
  const setBlock = props.setBlock;

  const handleClick = value => {
    setOpen(false);
    setBlock(value);
  };

  return (
    <StyledMenu open={open}>
      <button
        className={isCatList ? undefined : 'active'}
        onClick={() => handleClick(false)}
      >
        Cat feed
      </button>
      <button
        className={isCatList ? 'active' : undefined}
        onClick={() => handleClick(true)}
      >
        Cat list
      </button>
      <button href="/">Add new cat</button>
    </StyledMenu>
  );
}
export default Menu;
