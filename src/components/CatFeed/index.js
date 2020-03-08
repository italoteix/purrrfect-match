import React from 'react';

import { Container } from './styles';
import { ReactComponent as Icon } from '../../assets/icons/chevron-right.svg';

function CatFeed() {
  return (
    <Container>
      <div>
        <h3>Cat feed</h3>
      </div>
      {blogPosts.map(post => (
        <div key={post.id}>
          <a href={post.url}>{post.title}</a>
          <Icon alt="arrow pointing right" />
        </div>
      ))}
    </Container>
  );
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
  }
];

// the API currently don't have a posts endpoint. Hence, the post list will be mocked.
const blogPosts = [
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

export default CatFeed;
