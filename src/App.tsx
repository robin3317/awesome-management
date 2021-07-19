import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import EditMember from './pages/EditMember';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App: React.FC = () => {
  const { setCurrentMembers } = useActions();

  useEffect(() => {
    setCurrentMembers();
  }, [setCurrentMembers]);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={AddMember} />
      <Route path="/edit/:id" exact component={EditMember} />
    </Switch>
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
