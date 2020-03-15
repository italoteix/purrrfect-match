import React from 'react';

import { Container } from './styles';
import image from '../../assets/images/cats-basket.png';
import logotype from '../../assets/images/logotype.png';

import Header from '../../components/Header';
import UploadForm from '../../components/UploadForm';

export default function AddCatPage() {
  return (
    <Container>
      <Header img={logotype} imgAlt="logo" />
      <aside>
        <img src={image} alt="a basket full of kittens" />
      </aside>
      <main>
        <UploadForm />
      </main>
    </Container>
  );
}
