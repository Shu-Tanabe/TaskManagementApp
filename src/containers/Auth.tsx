import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from '../templates/Menu';
import { useRecoilValue } from 'recoil';
import { loggedInState } from '../states/rootStates/loggedIn';

const Auth = (): JSX.Element => {
  const isLoggedIn = useRecoilValue(loggedInState);
  if (isLoggedIn) {
    return (
      <Route path="/">
        <Menu />
      </Route>
    );
  } else {
    return <Redirect to={'/sign-up'} />;
  }
};

export default Auth;
