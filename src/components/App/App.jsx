import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import mock from '../../utils/mock';
import api from '../../utils/api';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import AboutUs from '../AboutUs/AboutUs';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  mock.initializeAxiosMockAdapter(api.instance);
  // eslint-disable-next-line no-unused-vars
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  // Обработчик входа пользователя
  function handleSignIn() {
    Promise.all([api.authUser(), api.updateProfile()])
      .then(([authData, userData]) => {
        if (authData.data.access) {
          console.log('current user is: ', userData.data);
          console.log('token is: ', authData.data.access);
          setIsAuthorized(true);
          setCurrentUser(userData.data);
          //  localStorage.setItem('jwt', authData.data.access);
        }
      })
      .catch((err) => {
        console.log('Ошибка при попытке входа', err.message);
      });
  }

  // Обработчик выхода пользователя (нужно будет прокинуть в ЛК)
  // function handleSignOut() {
  // setIsAuthorized(false);
  // localStorage.removeItem('jwt');
  // history.push("./");
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header isAuthorized={isAuthorized} handleSignIn={handleSignIn} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
