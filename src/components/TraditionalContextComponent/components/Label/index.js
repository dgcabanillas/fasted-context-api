import { useContext } from 'react';
import Context from '../../context/Context';
import styles from './index.module.scss';

const Label = ({ name = '' }) => {
  const { data } = useContext ( Context );

  return (
    <div className={styles['label']}>
      <span className={styles['label__name']}>{ name }: </span>
      <span className={styles['label__text']}>{ data[name] }</span>
    </div>
  )
}

export default Label;