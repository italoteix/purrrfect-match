import React from 'react';

import Burger from '../../components/Burger';
import Menu from '../../components/Menu';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <Burger open={this.state.open} setOpen={() => this.setOpen()} />
        <Menu
          open={this.state.open}
          setOpen={() => this.setOpen()}
          isCatList={this.props.isCatList}
          setBlock={this.props.setIsCatlist}
        />
      </div>
    );
  }
}

export default BurgerMenu;
