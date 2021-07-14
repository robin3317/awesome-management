import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class EditMember extends React.Component<RouteComponentProps<any>> {
  public render() {
    return <h1>Edit page</h1>;
  }
}

export default withRouter(EditMember);
