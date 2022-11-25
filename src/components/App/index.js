import Container from 'src/components/base/Container';
import FasterContextComponent from '../FasterContextComponent';
import MemoizedContextComponent from '../MemoizedContextComponent';
import TraditionalContextComponent from '../TraditionalContextComponent';

import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles['container']}>
      <Container title='App' column>
        <TraditionalContextComponent />
        <MemoizedContextComponent />
        <FasterContextComponent />
      </Container>
    </div>
  )
}

export default App;