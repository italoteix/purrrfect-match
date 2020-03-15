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

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { isCatList, setIsCatlist } = this.props;

    return (
      <div ref={this.node}>
        <Burger open={open} onClick={() => this.toggleOpen()} />
        <Menu
          open={open}
          setOpen={() => this.toggleOpen()}
          isCatList={isCatList}
          setBlock={setIsCatlist}
        />
      </div>
    );
  }
}

export default BurgerMenu;
