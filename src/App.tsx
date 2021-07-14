import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import EditMember from './pages/EditMember';
import './App.css';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={AddMember} />
        <Route path="/edit/:id" exact component={EditMember} />
      </Switch>
    );
  }
}

export default withRouter(App);
