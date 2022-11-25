import { useFastedContextData } from '../../hooks/useFastedContextData';
import styles from './index.module.scss';

const Label = ({ name = '' }) => {
  const { value } = useFastedContextData ( store => store[name] )

  return (
    <div className={styles['label']}>
      <span className={styles['label__name']}>{ name }:</span>
      <span className={styles['label__text']}>{ value }</span>
    </div>
  )
}

export default Label;