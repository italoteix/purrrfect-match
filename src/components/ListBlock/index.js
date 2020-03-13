import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CatBlock } from './styles';
import { ReactComponent as Icon } from '../../assets/icons/chevron-right.svg';

function CatFeed({ post }) {
  return (
    <div className="cat-feed">
      <a href={post.url}>{post.title}</a>
      <Icon alt="arrow pointing right" />
    </div>
  );
}

function CatList({ cat }) {
  return (
    <Link className="cat-list" to={`cat/${cat.id}`}>
      <CatBlock>
        <img src={cat.imgURL} alt="cat avatar" />
        <div>
          <h3>{cat.name}</h3>
          <div>
            <p>
              <strong>Age: </strong>
              {cat.age}
            </p>
            <p>
              <strong>Favorite activity: </strong>
              {cat.fav}
            </p>
            <p>
              <strong>Pet peave: </strong>
              {cat.peave}
            </p>
          </div>
        </div>
      </CatBlock>
    </Link>
  );
}

function ListBlock({ data, isCatList }) {
  return (
    <Container>
      <div>{isCatList ? <h1>Cat List</h1> : <h3>Cat feed</h3>}</div>
      {isCatList
        ? data.map(item => <CatList cat={item} key={item.id} />)
        : data.map(item => <CatFeed post={item} key={item.id} />)}
    </Container>
  );
}

export default ListBlock;
