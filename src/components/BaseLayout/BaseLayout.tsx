import Navigation from '../Navigation/Navigation';
import styles from './BaseLayout.module.scss';

interface IBaseLayoutProps {
  title: string;
  className?: string;
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={`${styles.baseLayout} ${className && className}`}>
      <Navigation />
      <div className={styles.baseLayoutBody}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
