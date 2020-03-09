import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Search } from './styles';
import logo from '../../assets/images/logo.png';
import logotype from '../../assets/images/logotype.png';
import { ReactComponent as Icon } from '../../assets/icons/magnifying.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/circle-plus.svg';
import BurgerMenu from '../../components/BurgerMenu';
import ListBlock from '../../components/ListBlock';

class SimpleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCatList: true,
      catList: catListMock,
      blogPosts: blogPostsMock,
      matches: this.mediaQueryList.matches
    };
  }

  // Listen to page width to conditional render
  componentDidMount() {
    this.mediaQueryList.addListener(this.handler);
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
            <Link to="/" role="button" aria-label="add a new cat">
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

// Mocked until we start using the real API
const catListMock = [
  {
    id: '1',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '2',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '3',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '4',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '5',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '6',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '7',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '8',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  },
  {
    id: '9',
    imgURL: 'https://cdn.dicionariopopular.com/imagens/grumpy-cat-cke.jpg',
    name: 'Fluffy Jenkins',
    age: '3 years',
    fav: 'Eating',
    peave: 'Hairballs'
  }
];

// the API currently don't have a posts endpoint. Hence, the post list will be mocked.
const blogPostsMock = [
  {
    id: '1',
    title: 'How to find the purrrfect pet',
    url: '/'
  },
  {
    id: '2',
    title: 'What to do with your new cat',
    url: '/'
  },
  {
    id: '3',
    title: 'How to potty-train your cat',
    url: '/'
  },
  {
    id: '4',
    title: 'Raw food diets for cats',
    url: '/'
  },
  {
    id: '5',
    title: 'Homemade treat recipes',
    url: '/'
  },
  {
    id: '6',
    title: 'Our favorite litter brands',
    url: '/'
  },
  {
    id: '7',
    title: 'Are cat breeds a thing?',
    url: '/'
  },
  {
    id: '8',
    title: 'Our favorite caturday activities',
    url: '/'
  },
  {
    id: '9',
    title: 'How to travel with your cat',
    url: '/'
  },
  {
    id: '10',
    title: 'How to manage multiple cats',
    url: '/'
  },
  {
    id: '11',
    title: 'The best cat memes, ranked',
    url: '/'
  }
];

export default SimpleList;
