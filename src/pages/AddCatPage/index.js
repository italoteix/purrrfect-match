import React from 'react';

import { Container, Form } from './styles';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import logotype from '../../assets/images/logotype.png';

class AddCatPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <header>
          <img src={logotype} alt="purrrfect match logo" />
        </header>
        <aside>
          <img src="" alt="" />
        </aside>
        <main>
          <Form action="">
            <h1>Add new cat</h1>
            <section>
              <h3>Cat</h3>
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Age</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Favorite Activity</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Pet Peave</label>
              <input type="text" name="" id="" />
            </section>
            <section>
              <h3>Ownership</h3>
              <label htmlFor="">Location</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Organization</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Medical Record</label>
              <span>
                <input type="text" name="" id="" />
                <button>
                  <PlusIcon />
                </button>
              </span>
            </section>
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
