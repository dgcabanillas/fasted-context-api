import Input from '../Input';
import Container from '../Container';

const FormContainer = () => {
  return (
    <Container title='Form Container' column>
      <Input name='name' />
      <Input name='lastname' />
    </Container>
  )
}

export default FormContainer;