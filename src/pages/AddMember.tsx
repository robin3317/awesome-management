import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class AddMember extends React.Component<RouteComponentProps<any>> {
  public render() {
    return <h1>Create page</h1>;
  }
}

export default withRouter(AddMember);
