import { memo } from 'react';
import Label from '../Label';
import Container from '../Container';

const DataContainer = memo(() => {
  return ( 
    <Container title='Data Container' column>
      <Label name='name' />
      <Label name='lastname' />
    </Container>
  )
})

export default DataContainer;