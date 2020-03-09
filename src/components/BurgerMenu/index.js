import React from 'react';

import Burger from '../../components/Burger';
import Menu from '../../components/Menu';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  node = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.listener);
  }

  handler = () => this.setState({ open: false });

  listener = event => {
    if (!this.node.current || this.node.current.contains(event.target)) {
      return;
    }
    this.handler(event);
  };

  setOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div ref={this.node}>
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
