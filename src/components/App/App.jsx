import { React, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import mock from '../../utils/mock';
import api from '../../utils/api';

import cities from '../../assets/mock-data/cities.json';

import answersData from '../../assets/dev-data/answersData';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Calendar from '../Calendar/Calendar';
import Places from '../Places/Places';
import Answers from '../Answers/Answers';
import Readings from '../Readings/Readings';
import AboutUs from '../AboutUs/AboutUs';
import UserArea from '../User/UserArea/UserArea';
import Rights from '../Rights/Rights';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Signin from '../Popups/Signin/Signin';
import Cities from '../Popups/Cities/Cities';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  mock.initializeAxiosMockAdapter(api.instance);

  const [currentUser, setCurrentUser] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [meetings, setMeetings] = useState([]);

  const [scrollTop, setScrollTop] = useState(0);
  const [hiddenMenuClass, setHiddenMenuClass] = useState('');

  const [isLoadingMeetings, setIsLoadingMeetings] = useState(true);

  const [userCity, setUserCity] = useState('');

  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [isChangeCityPopupOpen, setIsChangeCityPopupOpen] = useState(false);

  const [isRouteCalendar, setIsRouteCalendar] = useState(false);

  const history = useHistory();

  const handleChangeCityClick = () => setIsChangeCityPopupOpen(true);

  const closeChangeCityPopup = () => setIsChangeCityPopupOpen(false);

  const pushToProfilePage = () => history.push('./profile');

  const handleAddMeeting = (meeting) => setMeetings([meeting, ...meetings]);

  function openSignInModal(route) {
    setSignInModalIsOpen(true);

    if (route) {
      const state = route.includes('calendar');
      setIsRouteCalendar(state);
    }
  }

  function closeSignInModal() {
    setSignInModalIsOpen(false);
    setIsRouteCalendar(false);
  }

  function handleCalendarRoute() {
    if (isRouteCalendar) {
      history.push('/calendar');
    }
  }

  // Определить актуальный город пользователя
  function handleCities(currentCity) {
    currentUser.city = currentCity;
    const { name } = cities.find(({ id }) => id === currentCity);
    setUserCity(name);
  }

  // Проверка токена
  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsAuthorized(true);
    } else {
      handleChangeCityClick();
    }
  }

  useEffect(() => {
    checkToken();

    async function loadPage() {
      let results;

      try {
        results = await Promise.all([api.getMeetings(), api.updateProfile()]);
      } catch (err) {
        console.log(err.message);
      }

      const [meetingsData, userData] = results;

      const { data: meets } = meetingsData;
      const {
        data: { city },
      } = userData;

      setMeetings(meets);
      setIsLoadingMeetings(false);

      handleCities(city);
    }

    loadPage();
  }, []);

  // Обработчик входа пользователя
  async function handleSignIn() {
    let results;

    try {
      results = await Promise.all([api.authUser(), api.updateProfile()]);
    } catch (err) {
      console.log(err.message);
    }

    const [authData, userData] = results;

    const {
      data: { access },
    } = authData;

    const { data: user } = userData;
    const { city } = user;

    if (access) {
      setIsAuthorized(true);
      setCurrentUser(user);
      localStorage.setItem('jwt', access);
      handleCities(city);
    }

    handleCalendarRoute();
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
              <Route exact path="/questions">
                <Answers questions={answersData} />
              </Route>
              <Route exact path="/readings">
                <Readings />
              </Route>
              <ProtectedRoute
                exact
                path="/calendar"
                isAuthorized={isAuthorized}
                component={Calendar}
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
