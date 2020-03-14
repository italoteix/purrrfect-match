import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ img, imgAlt }) {
  return (
    <Container>
      <Link to="/">
        <img src={img} alt={imgAlt} />
      </Link>
    </Container>
  );
}
