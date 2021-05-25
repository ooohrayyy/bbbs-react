import { React, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import mock from '../../utils/mock';
import api from '../../utils/api';

import cities from '../../assets/mock-data/cities.json';

import { getParsedEventsData } from '../../utils/calendarUtils';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import AboutUs from '../AboutUs/AboutUs';
import UserArea from '../UserArea/UserArea';
import Places from '../Places/Places';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  mock.initializeAxiosMockAdapter(api.instance);

  const [currentUser, setCurrentUser] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [events, setEvents] = useState([]);
  const [meetings, setMeetings] = useState([]);

  const [scrollTop, setScrollTop] = useState(0);
  const [hiddenMenuClass, setHiddenMenuClass] = useState('');

  const [isLoadingMeetings, setIsLoadingMeetings] = useState(true);

  const [userCity, setUserCity] = useState('');

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

  // Определить актуальный город пользователя
  function handleCities(currentCity) {
    currentUser.city = currentCity;
    const cityName = cities.filter((el) => el.id === currentCity)[0].name;
    setUserCity(cityName);
  }

  // Проверка при загрузке страницы, авторизован ли пользователь
  useEffect(() => {
    checkToken();
    Promise.all([api.getMeetings(), api.getEvents(), api.updateProfile()])
      .then(([meetingsData, eventsData, userData]) => {
        const parseDate = getParsedEventsData(eventsData.data);
        setMeetings(meetingsData.data);
        setIsLoadingMeetings(false);
        setEvents(parseDate);
        handleCities(userData.data.city);
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
          handleCities(userData.data.city);
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop]);

  function handleAddMeeting(meeting) {
    setMeetings([meeting, ...meetings]);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
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
              <ProtectedRoute
                exact
                path="/calendar"
                isAuthorized={isAuthorized}
                component={Calendar}
              />
              <Route exact path="/to-go">
                <Places />
              </Route>
              <ProtectedRoute
                exact
                path="/profile"
                isAuthorized={isAuthorized}
                component={UserArea}
                allEvents={events}
                meetings={meetings}
                onAddMeeting={handleAddMeeting}
                onSignOut={handleSignOut}
                isLoading={isLoadingMeetings}
                userCity={userCity}
                onChooseCity={handleCities}
              />
              <Route path="/">
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
