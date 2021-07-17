import Navigation from '../Navigation/Navigation';
import styles from './BaseLayout.module.scss';

interface IBaseLayoutProps {
  title: string;
}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.baseLayout}>
      <Navigation />
      <div className={styles.baseLayoutBody}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
