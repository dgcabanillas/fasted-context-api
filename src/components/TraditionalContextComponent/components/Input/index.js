import { useContext } from 'react';
import Context from '../../context/Context';
import styles from './index.module.scss';

const Input = ({ name = '' }) => {
  const { data, setData } = useContext ( Context );

  return (
    <div className={styles['input']}>
      <span 
        className={styles['input__name']}
      >
        { name }:
      </span>
      <input 
        type='text' 
        value={data[name]}
        onChange={(e) => setData({ [name]: e.target.value })}
        className={styles['input__box']} 
      />
    </div>
  )
}

export default Input;