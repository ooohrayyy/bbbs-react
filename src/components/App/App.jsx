import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import mock from '../../utils/mock';
import api from '../../utils/api';

import { getParsedEventsData } from '../../utils/calendarUtils';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import AboutUs from '../AboutUs/AboutUs';
import UserArea from '../UserArea/UserArea';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  mock.initializeAxiosMockAdapter(api.instance);
  // eslint-disable-next-line no-unused-vars
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [events, setEvents] = React.useState([]);

  const [scrollTop, setScrollTop] = React.useState(0);
  const [hiddenMenuClass, setHiddenMenuClass] = React.useState('');

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

          api
            .getEvents()
            .then(({ data }) => {
              const parseDate = getParsedEventsData(data);
              setEvents(parseDate);
            })
            .catch((err) => console.log(err.message));
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

  function onScroll() {
    const currentPosition = window.pageYOffset;
    if (currentPosition > scrollTop && currentPosition > 20) {
      setHiddenMenuClass('header_hidden');
    } else {
      setHiddenMenuClass('');
    }
    setScrollTop(currentPosition);
  }

  React.useEffect(() => {
    handleSignIn();
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isAuthorized={isAuthorized} isHidden={hiddenMenuClass} />
      <main className="main">
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
          <Route exact path="/profile">
            <UserArea allEvents={events} />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
