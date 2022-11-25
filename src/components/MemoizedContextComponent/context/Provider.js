import { useReducer } from 'react'
import TraditionalContext from './Context'

const INITIAL_STATE = {
  name: '',
  lastname: ''
}

const reducer = ( prevState, newState ) => ({ ...prevState, ...newState });

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <TraditionalContext.Provider
      value={{
        data: state,
        setData: dispatch
      }}
    >
      { children }
    </TraditionalContext.Provider>
  )
}

export default Provider;