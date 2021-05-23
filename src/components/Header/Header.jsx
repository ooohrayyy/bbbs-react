import React from 'react';
import { NavLink } from 'react-router-dom';

import mock from '../../utils/mock';
import api from '../../utils/api';

import HeaderLinks from '../HeaderLinks/HeaderLinks';
import HeaderBurgerMenu from '../HeaderBurgerMenu/HeaderBurgerMenu';
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import Signin from '../Popups/Signin/Signin';

function Header({ isAuthorized }) {
  mock.initializeAxiosMockAdapter(api.instance);

  const [signInModalIsOpen, setSignInModalIsOpen] = React.useState(false);
  const [burgerMenuisOpen, setBurgerMenuIsOpen] = React.useState(false);
  const [searchMenuIsOpen, setSearchMenuIsOpen] = React.useState(false);

  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [userLogin, setUserLogin] = React.useState("");

  const headerClass = burgerMenuisOpen
    ? 'header header_displayed page__section'
    : 'header page__section';
  const burgerMenuClass = burgerMenuisOpen
    ? 'menu__burger menu__burger_active'
    : 'menu__burger';
  const menuListsWrapClass = burgerMenuisOpen
    ? 'menu__lists-wrap'
    : 'menu__lists-wrap menu__lists-wrap_hidden';
  const menuListSocialClass = burgerMenuisOpen
    ? 'menu__list menu__list_type_social'
    : 'menu__list menu__list_type_social menu__list_hidden';
  const menuClass = searchMenuIsOpen ? 'menu menu_state_search' : 'menu';
  const searchOptionsClass = searchMenuIsOpen
    ? 'search__options search__options_visible menu__search-options'
    : 'search__options menu__search-options';

  function handleSignInClick() {
    setSignInModalIsOpen(true);
  }

  function closeSignInModal() {
    setSignInModalIsOpen(false);
  }

  // Обработчик входа пользователя
  function handleSignIn(user) {
    console.log(user);
    Promise.all([api.authUser(), api.updateProfile()])
      .then(([authData, userData]) => {
        console.log(authData, userData);
        // if (authData.data.access) {
        // setUserLogin(userLogin);
        // setLoggedIn(true);
        // localStorage.setItem('jwt', res.data.access);
        // }
      })
      .catch((err) => {
        console.log('Ошибка при попытке входа', err.message);
      });
  }

  // Обработчик выхода пользователя
  // function handleSignOut() {
  // setUserLogin("");
  // setLoggedIn(false);
  // localStorage.removeItem('jwt');
  // history.push("./sign-in");
  // }

  function toggleBurgerMenu() {
    if (burgerMenuisOpen) {
      setBurgerMenuIsOpen(false);
    } else {
      setBurgerMenuIsOpen(true);
    }
  }

  function toggleSearchMenu() {
    if (searchMenuIsOpen) {
      setSearchMenuIsOpen(false);
    } else {
      setSearchMenuIsOpen(true);
    }
  }

  return (
    <header className={headerClass}>
      <nav className={menuClass}>
        <NavLink className="menu__logo" to="/main">
          наставники.про
        </NavLink>
        <HeaderLinks
          menuListsWrapClass={menuListsWrapClass}
          menuListSocialClass={menuListSocialClass}
        />
        <HeaderBurgerMenu
          burgerMenuClass={burgerMenuClass}
          toggleBurgerMenu={toggleBurgerMenu}
        />
        <HeaderButtons
          isAuthorized={isAuthorized}
          toggleSearchMenu={toggleSearchMenu}
          searchOptionsClass={searchOptionsClass}
          onSignInClick={handleSignInClick}
        />
      </nav>
      <Signin
        isOpen={signInModalIsOpen}
        onSignIn={handleSignIn}
        onClose={closeSignInModal}
      />
    </header>
  );
}

export default Header;
