import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export const useFastedContextData = ( selector = () => {} ) => {
  const store = useContext ( Context );
  const [state, setState] = useState ( selector ( store.get() ));

  useEffect (() => {
    return store.subscribe (() => setState ( selector ( store.get() )));
    // eslint-disable-next-line
  }, [])

  return { 
    value: state, 
    setData: store.set 
  };
}