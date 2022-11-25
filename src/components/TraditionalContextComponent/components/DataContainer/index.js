import Label from '../Label';
import Container from '../Container';

const DataContainer = () => {
  return (
    <Container title='Data Container' column>
      <Label name='name' />
      <Label name='lastname' />
    </Container>
  )
}

export default DataContainer;