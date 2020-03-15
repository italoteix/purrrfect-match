import React from 'react';

import { Container, CardInfo, BarGraph, ProfilePic } from './styles';
import logotype from '../../assets/images/logotype.png';
import api from '../../services/api';

import Header from '../../components/Header';
import PieChart from '../../components/PieChart';
import CardSwiper from '../../components/CardSwiper';

class ViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
      relatedCats: []
    };
  }

  componentDidMount() {
    this._updateCatData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this._updateCatData();
    }
  }

  _updateCatData = async () => {
    const { match } = this.props;
    const { id } = match.params;

    const [cat, relatedCats] = await Promise.all([
      api.get(`cat/${id}`),
      api.get('cats?_limit=6')
    ]);

    this.setState({
      ...this.state,
      cat: cat.data,
      relatedCats: relatedCats.data
    });
  };

  render() {
    const { cat, relatedCats } = this.state;

    return (
      <Container>
        <Header img={logotype} imgAlt="logo" />
        <main>
          <ProfilePic>
            <img className="profile" src={cat.imgURL} alt="cat avatar" />
          </ProfilePic>
          <CardInfo>
            <h1>{cat.name}</h1>
            <div className="grid">
              <article className="about-cont">
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
              <article className="personality-container">
                <h3>
                  <strong>Personality</strong>
                </h3>
                {cat.personality &&
                  cat.personality.map(item => (
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
              <article className="day-container">
                <h3>Average Day</h3>
                <PieChart activities={cat.day ? cat.day : []} />
              </article>
            </div>
          </CardInfo>
        </main>
        <section>
          <h2>See more cats</h2>
          <CardSwiper cards={relatedCats} />
        </section>
      </Container>
    );
  }
}

export default ViewPage;
