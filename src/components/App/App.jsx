import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import mock from '../../utils/mock';
import api from '../../utils/api';

import { getParsedEventsData } from '../../utils/calendarUtils';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import AboutUs from '../AboutUs/AboutUs';
import UserArea from '../UserArea/UserArea';
import Places from '../Places/Places';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  mock.initializeAxiosMockAdapter(api.instance);

  const [currentUser, setCurrentUser] = React.useState({});
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const [events, setEvents] = React.useState([]);
  const [meetings, setMeetings] = React.useState([]);

  const [scrollTop, setScrollTop] = React.useState(0);
  const [hiddenMenuClass, setHiddenMenuClass] = React.useState('');

  const [isLoadingMeetings, setIsLoadingMeetings] = React.useState(true);

  const history = useHistory();

  // Проверка токена
  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      setIsAuthorized(false);
    } else {
      setIsAuthorized(true);
    }
  }

  // Проверка при загрузке страницы, авторизован ли пользователь
  React.useEffect(() => {
    checkToken();
    Promise.all([api.getMeetings(), api.getEvents()])
      .then(([meetingsData, eventsData]) => {
        const parseDate = getParsedEventsData(eventsData.data);
        setMeetings(meetingsData.data);
        setIsLoadingMeetings(false);
        setEvents(parseDate);
      })
      .catch((err) => err.message);
  }, []);

  // Обработчик входа пользователя
  function handleSignIn() {
    Promise.all([api.authUser(), api.updateProfile()])
      .then(([authData, userData]) => {
        if (authData.data.access) {
          setIsAuthorized(true);
          setCurrentUser(userData.data);
          localStorage.setItem('jwt', authData.data.access);
        }
      })
      .catch((err) => err.message);
  }

  function pushToProfilePage() {
    history.push('./profile');
  }

  // Обработчик выхода пользователя
  function handleSignOut() {
    setIsAuthorized(false);
    localStorage.removeItem('jwt');
    history.push('./');
  }

  function handleScroll() {
    const currentPosition = window.pageYOffset;
    if (currentPosition > scrollTop && currentPosition > 20) {
      setHiddenMenuClass('header_hidden');
    } else {
      setHiddenMenuClass('');
    }
    setScrollTop(currentPosition);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop]);

  function handleAddMeeting(meeting) {
    setMeetings([meeting, ...meetings]);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isAuthorized={isAuthorized}
          onSignIn={handleSignIn}
          isHidden={hiddenMenuClass}
          pushToProfilePage={pushToProfilePage}
        />
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
            <Route exact path="/to-go">
              <Places />
            </Route>
            <Route exact path="/profile">
              <UserArea
                allEvents={events}
                meetings={meetings}
                onAddMeeting={handleAddMeeting}
                onSignOut={handleSignOut}
                isLoading={isLoadingMeetings}
              />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
