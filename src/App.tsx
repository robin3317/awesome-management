import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import EditMember from './pages/EditMember';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: React.FC = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={AddMember} />
        <Route path="/edit/:id" exact component={EditMember} />
      </Switch>
    </Provider>
  );
};

// class App extends React.Component<RouteComponentProps<any>> {
//   render() {
//     return (
// <Switch>
//   <Route path="/" exact component={Home} />
//   <Route path="/create" exact component={AddMember} />
//   <Route path="/edit/:id" exact component={EditMember} />
// </Switch>
//     );
//   }
// }

export default App;
