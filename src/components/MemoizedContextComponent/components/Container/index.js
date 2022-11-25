import classNames from 'classnames';
import styles from './index.module.scss';

const Container = ({ title, children, column = false }) => {
  return (
    <div className={styles['container']}>
      { title && <h1 className={styles['container__title']}>{ title }</h1> }
      <div 
        className={classNames({
          [styles['container__content']]: true,
          [styles['container__content--column']]: column
        })}
      >
        { children }
      </div>
    </div>
  )
}

export default Container;