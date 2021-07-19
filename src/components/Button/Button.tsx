import styles from './Button.module.scss';

interface IButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
