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
import Rights from '../Rights/Rights';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Signin from '../Popups/Signin/Signin';
import Cities from '../Popups/Cities/Cities';

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

  const [isRegisteredEvent, setIsRegisteredEvent] = useState(false);
  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [isChangeCityPopupOpen, setIsChangeCityPopupOpen] = useState(false);

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

  function openSignInModal() {
    setSignInModalIsOpen(true);
  }

  function closeSignInModal() {
    setSignInModalIsOpen(false);
  }

  function handleChangeCityClick() {
    setIsChangeCityPopupOpen(true);
  }

  function closeChangeCityPopup() {
    setIsChangeCityPopupOpen(false);
  }

  // Предложить выбрать город неавторизованному пользователю
  function offerChoiceOfCity() {
    if (!isAuthorized) {
      handleChangeCityClick();
    }
  }

  // Проверка при загрузке страницы, авторизован ли пользователь
  useEffect(() => {
    checkToken();
    offerChoiceOfCity();
    Promise.all([api.getMeetings(), api.getEvents(), api.updateProfile()])
      .then(([meetingsData, eventsData, userData]) => {
        const cityEvent = eventsData.data.filter(
          (i) => userData.data.city === i.city,
        );
        const parseDate = getParsedEventsData(cityEvent);
        setMeetings(meetingsData.data);
        setIsLoadingMeetings(false);
        setEvents(parseDate);
        handleCities(userData.data.city);
      })
      .catch((err) => err.message);
  }, []);

  // Обработчик входа пользователя
  function handleSignIn() {
    Promise.all([api.authUser(), api.updateProfile(), api.getEvents()])
      .then(([authData, userData, eventsData]) => {
        if (authData.data.access) {
          const cityEvent = eventsData.data.filter(
            (i) => userData.data.city === i.city,
          );
          const parseDate = getParsedEventsData(cityEvent);
          setEvents(parseDate);
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

  // появление хедера при обратном скролле
  function handleScroll() {
    const currentPosition = window.pageYOffset;
    if (currentPosition > scrollTop && currentPosition > 20) {
      setHiddenMenuClass('header_hidden');
    } else if (currentPosition > 20) {
      setHiddenMenuClass('header_attached');
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

  // запись на мероприятие
  function handleBookingEventClick(eventId) {
    api
      .bookEvent({ id: currentUser.user, event: eventId })
      .then(() => {
        setIsRegisteredEvent(true);
        api
          .getEvents()
          .then(({ data }) => {
            const cityEvent = data.filter((i) => currentUser.city === i.city);
            const parseDate = getParsedEventsData(cityEvent);
            setEvents(parseDate);
          })
          .catch((err) => err.message);
      })
      .catch((err) => err.message);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <div className="page">
          <Header
            isAuthorized={isAuthorized}
            isHidden={hiddenMenuClass}
            pushToProfilePage={pushToProfilePage}
            signInModalIsOpen={signInModalIsOpen}
            openSignInModal={openSignInModal}
          />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Main isAuthorized={isAuthorized} />
              </Route>
              <Route exact path="/about">
                <AboutUs />
              </Route>
              <ProtectedRoute
                exact
                path="/calendar"
                cityEvents={events}
                isAuthorized={isAuthorized}
                component={Calendar}
                isRegisteredEvent={isRegisteredEvent}
                onBookingEvent={handleBookingEventClick}
              />
              <Route exact path="/to-go">
                <Places isAuthorized={isAuthorized} />
              </Route>
              <Route exact path="/rights">
                <Rights />
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
                onChooseCity={handleChangeCityClick}
              />
              <Route path="/">
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
        </div>
        <Footer />
        <Signin
          isOpen={signInModalIsOpen}
          onSignIn={handleSignIn}
          onClose={closeSignInModal}
        />
        <Cities
          isOpen={isChangeCityPopupOpen}
          handleClose={closeChangeCityPopup}
          handleCities={handleCities}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
