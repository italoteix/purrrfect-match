import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from './styles';
import logo from '../../assets/images/logo.png';
import logotype from '../../assets/images/logotype.png';
import { ReactComponent as PlusIcon } from '../../assets/icons/circle-plus.svg';
import api from '../../services/api';
import breakpoints from '../../styles/breakpoints';

import BurgerMenu from '../../components/BurgerMenu';
import { CatFeed, CatList } from '../../components/ListBlock';
import SearchField from '../../components/SearchField';
import PawLoading from '../../components/PawLoading';

class SimpleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCatList: true,
      catList: [],
      filteredCatList: [],
      blogPosts: [],
      searchField: '',
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
      filteredCatList: catList.data,
      blogPosts: blogPosts.data
    });
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.handler);
  }

  mediaQueryList = window.matchMedia(breakpoints.tablet);

  handler = event => {
    this.setState({ ...this.state, matches: event.matches });
  };

  setIsCatlist = value => {
    this.setState({ ...this.state, isCatList: value });
  };

  onSearchChange = async event => {
    await this.setState({ searchField: event.target.value });

    const filteredCatList = this.state.catList.filter(cat =>
      cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    this.setState({ filteredCatList });
  };

  render() {
    const { isCatList, filteredCatList, blogPosts, matches } = this.state;

    if (this.state.catList.length === 0) {
      return <PawLoading />;
    }

    return (
      <Container>
        <Header>
          <picture>
            <source srcSet={logotype} media={breakpoints.tablet} />
            <img src={logo} alt="purrrfect match logo" />
          </picture>
          <SearchField onSearch={this.onSearchChange} />
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
          {(matches || !isCatList) && <CatFeed posts={blogPosts} />}
          {(matches || isCatList) && <CatList cats={filteredCatList} />}
        </main>
      </Container>
    );
  }
}

export default SimpleList;
