import Container from './components/Container';
import DataContainer from './components/DataContainer';
import FormContainer from './components/FormContainer';
import Provider from './context/Provider';

const Content = () => {
  return (
    <Container title='Traditional Context'>
      <FormContainer />
      <DataContainer />
    </Container>
  )
}

const TraditionalContextComponent = () => {
  return (
    <Provider>
      <Content />
    </Provider>
  )
}

export default TraditionalContextComponent;