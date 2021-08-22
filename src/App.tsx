import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../src/templates/Menu';
import SignUp from './templates/SignUp';
import Auth from './containers/Auth';

const PrivateRoute = ({ ...props }): JSX.Element => {
  return <Route {...props} />;
};

function App(): JSX.Element {
  return (
    <div style={{ height: '100%' }}>
      <Router>
        <Switch>
          <Route path="/sign-up" exact>
            <RecoilRoot>
              <SignUp />
            </RecoilRoot>
          </Route>
          <RecoilRoot>
            <Auth />
          </RecoilRoot>
          {/* <PrivateRoute path="/" component={Menu} /> */}
          {/* <Route path="/"> */}
          {/* <Menu /> */}
          {/* </Route> */}
          {/* </Auth> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
