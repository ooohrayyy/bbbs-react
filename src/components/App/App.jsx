import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import AboutUs from '../AboutUs/AboutUs';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/profile" />
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
