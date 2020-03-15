import React from 'react';

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { AddButtom, Container, FileLabel, Input } from './styles';

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: ''
    };
  }

  handleChange = e => {
    // console.log(e.target.files[0].name);
    this.setState({ fileName: e.target.files[0].name });
  };

  render() {
    const { label, name, register } = this.props;

    return (
      <Container htmlFor={name}>
        <p>{label}</p>
        <div>
          <FileLabel>{this.state.fileName}</FileLabel>
          <AddButtom type="button">
            <PlusIcon />
          </AddButtom>
        </div>
        <Input
          type="file"
          name={name}
          id={name}
          ref={register}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default FileInput;
