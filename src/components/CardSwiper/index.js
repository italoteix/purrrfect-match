import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function CardSwiper({ cards }) {
  return (
    <Container>
      {cards.map(card => (
        <Link key={card.id} to={`/cat/${card.id}`}>
          <img src={card.imgURL} alt={card.name} />
        </Link>
      ))}
    </Container>
  );
}

export default CardSwiper;
