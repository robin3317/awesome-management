import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './Home.module.scss';

class Home extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div className={styles.home}>
        <Navigation />
      </div>
    );
  }
}

export default withRouter(Home);
