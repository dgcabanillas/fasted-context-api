import { useCallback, useRef } from 'react';

export const useStore = () => {
  const data = useRef({ 
    name: '',
    lastname: ''
  });
  const subscribers = useRef(new Set()); 

  const get = useCallback(() => data.current, []);

  const set = useCallback(( state ) => {
    data.current = { ...data.current, ...state };
    subscribers.current.forEach ( callback => callback () );
  }, []);

  const subscribe = useCallback(( callback = () => {} ) => {
    subscribers.current.add ( callback );
    return () => subscribers.current.delete ( callback );
  }, []); 
  
  return { get, set, subscribe }
}