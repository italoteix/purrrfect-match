import React from 'react';

import { Container } from './styles';
import { ReactComponent as Icon } from '../../assets/icons/chevron-right.svg';

function CatFeed({ post }) {
  return (
    <div className="cat-feed" key={post.id}>
      <a href={post.url}>{post.title}</a>
      <Icon alt="arrow pointing right" />
    </div>
  );
}

function CatList({ cat }) {
  return <h1>Cat List</h1>;
}

function ListBlock({ data, isCatList }) {
  return (
    <Container>
      <div>
        <h3>Cat feed</h3>
      </div>
      {isCatList
        ? data.map(item => <CatList cat={item} />)
        : data.map(item => <CatFeed post={item} />)}
    </Container>
  );
}

export default ListBlock;
