import React from 'react';

import { Container, CardInfo, BarGraph } from './styles';
import logotype from '../../assets/images/logotype.png';

import PieChart from '../../components/PieChart';
import CardSwiper from '../../components/CardSwiper';

class ViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: catInfoMock,
      relatedCats: relatedCatsMock
    };
  }

  render() {
    const { cat, relatedCats } = this.state;
    return (
      <Container>
        <header>
          <img src={logotype} alt="purrrfect match logo" />
        </header>
        <main>
          <img className="profile" src={cat.imgURL} alt="cat avatar" />
          <CardInfo>
            <h1>{cat.name}</h1>
            <article className="info-grid">
              <h3>About</h3>
              <p>
                <strong>Age: </strong>
                {cat.age}
              </p>
              <address>
                <strong>Location: </strong>
                <p>{cat.location}</p>
                <p>{cat.address}</p>
              </address>
              <p>
                <strong>Favorite activity: </strong>
                {cat.fav}
              </p>
              <p>
                <strong>Pet peave: </strong>
                {cat.peave}
              </p>
              <p>
                <strong>Bio: </strong>
                {cat.bio}
              </p>
              <a href={cat.medicalURL}>View medical record</a>
            </article>
            <article>
              <h3>
                <strong>Personality</strong>
              </h3>
              {cat.personality.map(item => (
                <div className="personality" key={item.type}>
                  <p>
                    <strong>{item.type}</strong>
                  </p>
                  <BarGraph width={item.value}>
                    <div></div>
                  </BarGraph>
                </div>
              ))}
            </article>
            <article>
              <h3>Average Day</h3>
              <PieChart activities={cat.day} />
            </article>
          </CardInfo>
          <section>
            <h2>See more cats</h2>
            {/* {relatedCats.map(cat => ( */}
            <CardSwiper cards={relatedCats} />
            {/* ))} */}
          </section>
        </main>
      </Container>
    );
  }
}

const catInfoMock = {
  id: '1',
  imgURL:
    'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
  name: 'Catzilla',
  age: '1 year',
  fav: 'Meowing',
  peave: 'No one listening',
  location: 'SPCA Orange County',
  address: '21632 Newland St, Huntington Beach, CA 92646',
  bio:
    'Catzilla is a spunky cat who likes to know what is going on at all times. He is curious, smart, and personable. He loves to meow, hunt, eat, and sleep. Catzilla also does not get along with other cats, but he likes dogs. Catzilla is in need of a loving, lasting home.',
  medicalURL: '/',
  personality: [
    {
      type: 'Curious',
      value: 0.9
    },
    {
      type: 'Friendly',
      value: 0.55
    },
    {
      type: 'Energetic',
      value: 0.7
    }
  ],
  day: [
    {
      type: 'Meowing',
      value: 25
    },
    {
      type: 'Hunting',
      value: 7
    },
    {
      type: 'Sleeping',
      value: 55
    },
    {
      type: 'Eating',
      value: 13
    }
  ]
};

const relatedCatsMock = [
  {
    id: '1',
    name: 'Catzilla',
    imgURL:
      'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
    url: '/'
  },
  {
    id: '2',
    name: 'Catzilla',
    imgURL:
      'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
    url: '/'
  },
  {
    id: '3',
    name: 'Catzilla',
    imgURL:
      'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
    url: '/'
  },
  {
    id: '4',
    name: 'Catzilla',
    imgURL:
      'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
    url: '/'
  },
  {
    id: '5',
    name: 'Catzilla',
    imgURL:
      'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
    url: '/'
  },
  {
    id: '6',
    name: 'Catzilla',
    imgURL:
      'https://squared-potato.pt/wp-content/uploads/2020/02/Pico-Handmade-Cat-Shoulder-Bag-image-12.jpg',
    url: '/'
  }
];

export default ViewPage;
