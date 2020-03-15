import React from 'react';
import { Link } from 'react-router-dom';

import {
  Bio,
  CatImg,
  Container,
  CatBlock,
  EmptyList,
  Info,
  PostBlock
} from './styles';
import { ReactComponent as Icon } from '../../assets/icons/chevron-right.svg';

function CatFeedItem({ post }) {
  return (
    <PostBlock>
      <a href={post.url}>{post.title}</a>
      <Icon alt="arrow pointing right" />
    </PostBlock>
  );
}

function CatAttribute({ label, text }) {
  return (
    <p>
      <strong>{`${label} `}</strong>
      {text}
    </p>
  );
}

function CatListItem({ cat }) {
  return (
    <Link to={`cat/${cat.id}`}>
      <CatBlock>
        <CatImg>
          <img src={cat.imgURL} alt="cat avatar" />
        </CatImg>
        <Info>
          <h3>{cat.name}</h3>
          <Bio>
            <CatAttribute label="Age:" text={cat.age} />
            <CatAttribute label="Favorite activity:" text={cat.age} />
            <CatAttribute label="Pet peave:" text={cat.peave} />
          </Bio>
        </Info>
      </CatBlock>
    </Link>
  );
}

export function CatList({ cats }) {
  if (cats.length <= 0) {
    return (
      <Container>
        <div>
          <h1>Cat List</h1>
        </div>
        <EmptyList>We couldn't find any cats for this search.</EmptyList>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <h1>Cat List</h1>
      </div>
      {cats.map(cat => (
        <CatListItem cat={cat} key={cat.id} />
      ))}
    </Container>
  );
}

export function CatFeed({ posts }) {
  if (posts.length <= 0) {
    return (
      <Container>
        <div>
          <h1>Cat List</h1>
        </div>
        <EmptyList>There are no posts at the moment.</EmptyList>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <h3>Cat feed</h3>
      </div>
      {posts.map(post => (
        <CatFeedItem post={post} key={post.id} />
      ))}
    </Container>
  );
}
