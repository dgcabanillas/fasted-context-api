import { memo } from 'react';
import Provider from './context/Provider';
import Container from './components/Container';
import FormContainer from './components/FormContainer';
import DataContainer from './components/DataContainer';

const Content = memo(() => {
  return (
    <Container title='Memoized Context'>
      <FormContainer/>
      <DataContainer/>
    </Container>
  )
})

const MemoizedContextComponent = memo(() => {
  return (
    <Provider>
      <Content />
    </Provider>
  )
})

export default MemoizedContextComponent;