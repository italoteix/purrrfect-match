import React from 'react';
import { Link } from 'react-router-dom';

import { Bio, CatImg, Container, CatBlock, Info, PostBlock } from './styles';
import { ReactComponent as Icon } from '../../assets/icons/chevron-right.svg';

function CatFeed({ post }) {
  return (
    <PostBlock>
      <a href={post.url}>{post.title}</a>
      <Icon alt="arrow pointing right" />
    </PostBlock>
  );
}

function CatList({ cat }) {
  return (
    <Link to={`cat/${cat.id}`}>
      <CatBlock>
        <CatImg>
          <img src={cat.imgURL} alt="cat avatar" />
        </CatImg>
        <Info>
          <h3>{cat.name}</h3>
          <Bio>
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
          </Bio>
        </Info>
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
