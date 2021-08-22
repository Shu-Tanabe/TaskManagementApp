import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../src/templates/Menu';
import SignUp from './templates/SignUp';

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
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
