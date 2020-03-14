import React from 'react';

import { Container, Form } from './styles';
import image from '../../assets/images/cats-basket.png';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import logotype from '../../assets/images/logotype.png';

import Header from '../../components/Header';

class AddCatPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header img={logotype} imgAlt="logo" />
        <aside>
          <img src={image} alt="a basket full of kittens" />
        </aside>
        <main>
          <Form action="">
            <h1>Add new cat</h1>
            <fieldset>
              <legend>
                <h3>Cat</h3>
              </legend>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="age">Age</label>
              <input type="text" name="age" id="age" />
              <label htmlFor="fav">Favorite Activity</label>
              <input type="text" name="fav" id="fav" />
              <label htmlFor="peave">Pet Peave</label>
              <input type="text" name="peave" id="peave" />
            </fieldset>
            <fieldset>
              <legend>
                <h3>Ownership</h3>
              </legend>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" />
              <label htmlFor="organization">Organization</label>
              <input type="text" name="organization" id="organization" />
              <label htmlFor="record">Medical Record</label>
              <span>
                <input type="text" name="record" id="record" />
                <button type="button">
                  <PlusIcon />
                </button>
              </span>
            </fieldset>
            <button type="submit">
              Next <ArrowIcon />
            </button>
          </Form>
        </main>
      </Container>
    );
  }
}

export default AddCatPage;
