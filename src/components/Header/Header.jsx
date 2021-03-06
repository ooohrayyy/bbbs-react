import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderBurgerMenu from './HeaderBurgerMenu/HeaderBurgerMenu';
import HeaderButtons from './HeaderButtons/HeaderButtons';

import useCurrentWidth from '../../utils/useCurrentWidth';

function Header({ isAuthorized, isHidden, openSignInModal }) {
  const [burgerMenuisOpen, setBurgerMenuIsOpen] = React.useState(false);
  const [searchMenuIsOpen, setSearchMenuIsOpen] = React.useState(false);

  const currentWidth = useCurrentWidth();
  const history = useHistory();

  const headerClass = burgerMenuisOpen
    ? `header ${isHidden} header_displayed page__section`
    : `header ${isHidden} page__section`;
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
  const logoClass = isAuthorized
    ? 'menu__logo menu__logo_authorized'
    : 'menu__logo';

  function handleSignInClick() {
    if (isAuthorized) {
      history.push('/profile');
    } else {
      openSignInModal();
    }
  }

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

  React.useEffect(() => {
    if (currentWidth > 1380) {
      setBurgerMenuIsOpen(false);
    }
  }, [currentWidth]);

  return (
    <header className={headerClass}>
      <nav className={menuClass}>
        <NavLink className={logoClass} to="/">
          ????????????????????.??????
        </NavLink>
        <HeaderLinks
          menuListsWrapClass={menuListsWrapClass}
          menuListSocialClass={menuListSocialClass}
          isAuthorized={isAuthorized}
          onCalendarLinkClick={openSignInModal}
          setBurgerMenuIsOpen={setBurgerMenuIsOpen}
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
    </header>
  );
}

export default Header;
