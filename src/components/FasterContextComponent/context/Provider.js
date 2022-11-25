import { useStore } from '../hooks/useStore';
import Context from './Context';

const Provider = ({ children }) => {
  return (
    <Context.Provider value={useStore ()}>
      { children }
    </Context.Provider>
  )
}

export default Provider;