import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { Container, Submit } from './styles';
import api from '../../services/api';

import TextInput from '../TextInput';
import FileInput from '../FileInput';

const requiredMessage = 'This field is required.';
const Schema = yup.object().shape({
  name: yup.string().required(requiredMessage),
  age: yup.string().required(requiredMessage),
  fav: yup.string().required(requiredMessage),
  pev: yup.string().required(requiredMessage),
  location: yup.string().required(requiredMessage),
  organization: yup.string().required(requiredMessage)
});

const fields = [
  [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'fav', label: 'Favorite Activity' },
    { id: 'pev', label: 'Pet Peave' }
  ],
  [
    { id: 'location', label: 'Location' },
    { id: 'organization', label: 'Organization' }
  ]
];

export default function UploadForm() {
  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: Schema
  });

  const onSubmit = async ({
    name,
    age,
    fav,
    pev,
    organization,
    location,
    record
  }) => {
    const data = new FormData();
    data.append('file', record[0]);
    data.set('name', name);
    data.set('age', age);
    data.set('fav', fav);
    data.set('peave', pev);
    data.set('location', location);
    data.set('organization', organization);

    await api.post('cat', data, { 'Content-Type': 'multipart/form-data' });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Add new cat</h1>
      <fieldset>
        <legend>
          <h3>Cat</h3>
        </legend>
        {fields[0].map(input => (
          <TextInput
            key={input.id}
            label={input.label}
            name={input.id}
            register={register}
            errors={errors}
          />
        ))}
      </fieldset>
      <fieldset>
        <legend>
          <h3>Ownership</h3>
        </legend>
        {fields[1].map(input => (
          <TextInput
            key={input.id}
            label={input.label}
            name={input.id}
            register={register}
            errors={errors}
          />
        ))}
        <FileInput
          label="Medical Record"
          name="record"
          register={register}
          getValues={getValues}
        />
      </fieldset>
      <Submit type="submit">
        Next <ArrowIcon />
      </Submit>
    </Container>
  );
}
