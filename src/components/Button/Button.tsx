import styles from './Button.module.scss';

const Button: React.FC = (props) => (
  <button className={styles.button}>{props.children}</button>
);

export default Button;
