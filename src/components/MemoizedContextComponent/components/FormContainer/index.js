import { memo } from 'react';
import Input from '../Input';
import Container from '../Container';

const FormContainer = memo(() => {
  return (
    <Container title='Form Container' column>
      <Input name='name' />
      <Input name='lastname' />
    </Container>
  )
})

export default FormContainer;