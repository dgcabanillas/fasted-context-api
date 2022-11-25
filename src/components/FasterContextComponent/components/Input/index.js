import { useFastedContextData } from '../../hooks/useFastedContextData';
import styles from './index.module.scss';

const Input = ({ name = '' }) => {
  const { value, setData } = useFastedContextData ( store => store[name] );

  return (
    <div className={styles['input']}>
      <span 
        className={styles['input__name']}
      >
        { name }:
      </span>
      <input 
        type='text' 
        value={value}
        onChange={(e) => setData({ [name]: e.target.value })}
        className={styles['input__box']}
      />
    </div>
  )
}

export default Input;