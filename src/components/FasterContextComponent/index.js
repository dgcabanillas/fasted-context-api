
import Container from './components/Container';
import DataContainer from './components/DataContainer';
import FormContainer from './components/FormContainer';
import Provider from './context/Provider';

const Content = () => {
  return (
    <Container title='Faster Context'>
      <FormContainer />
      <DataContainer />
    </Container>
  )
}

const FasterContextComponent = () => {
  return (
    <Provider>
      <Content />
    </Provider>
  )
}

export default FasterContextComponent;