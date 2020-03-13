import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Search } from './styles';
import logo from '../../assets/images/logo.png';
import logotype from '../../assets/images/logotype.png';
import { ReactComponent as Icon } from '../../assets/icons/magnifying.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/circle-plus.svg';
import api from '../../services/api';

import BurgerMenu from '../../components/BurgerMenu';
import ListBlock from '../../components/ListBlock';

class SimpleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCatList: true,
      catList: [],
      blogPosts: [],
      matches: this.mediaQueryList.matches
    };
  }

  async componentDidMount() {
    // Listen to page width to conditional render
    this.mediaQueryList.addListener(this.handler);

    const [catList, blogPosts] = await Promise.all([
      api.get('cats'),
      api.get('posts')
    ]);

    this.setState({
      ...this.state,
      catList: catList.data,
      blogPosts: blogPosts.data
    });
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.handler);
  }

  mediaQueryList = window.matchMedia('(min-width: 768px)');

  handler = e => {
    this.setState({ ...this.state, matches: e.matches });
  };

  setIsCatlist = value => {
    this.setState({ ...this.state, isCatList: value });
  };

  render() {
    const { isCatList, catList, blogPosts, matches } = this.state;

    return (
      <Container>
        <Header>
          <picture>
            <source srcSet={logotype} media="(min-width: 768px)" />
            <img src={logo} alt="purrrfect match logo" />
          </picture>
          <Search>
            <Icon alt="search icon" />
            <input placeholder="Search cats" />
          </Search>
          {matches && (
            <Link to="/cats/submit" role="button" aria-label="add a new cat">
              <PlusIcon focusable="false" aria-hidden="true" />
              Add new cat
            </Link>
          )}
          {!matches && (
            <BurgerMenu
              isCatList={isCatList}
              setIsCatlist={this.setIsCatlist.bind(this)}
            />
          )}
        </Header>
        <main>
          {(matches || !isCatList) && (
            <ListBlock data={blogPosts} isCatList={false} />
          )}
          {(matches || isCatList) && (
            <ListBlock data={catList} isCatList={true} />
          )}
        </main>
      </Container>
    );
  }
}

export default SimpleList;
