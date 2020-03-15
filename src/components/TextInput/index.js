import React from 'react';

import { Label, Input, ErrorMessage } from './styles';

export default function TextInput({ label, name, register, errors }) {
  return (
    <>
      <Label htmlFor={name}>
        {label}
        <ErrorMessage>{errors[name] && errors[name].message}</ErrorMessage>
      </Label>
      <Input type="text" name={name} id={name} ref={register} />
    </>
  );
}
