import React from 'react';

import HeaderRegularLinks from '../HeaderRegularLinks/HeaderRegularLinks';
import HeaderSocialLinks from '../HeaderSocialLinks/HeaderSocialLinks';

function HeaderLinks({
  menuListsWrapClass,
  menuListSocialClass,
  isAuthorized,
  onCalendarLinkClick,
  setBurgerMenuIsOpen,
}) {
  return (
    <div className={menuListsWrapClass}>
      <HeaderRegularLinks
        isAuthorized={isAuthorized}
        onCalendarLinkClick={onCalendarLinkClick}
        setBurgerMenuIsOpen={setBurgerMenuIsOpen}
      />
      <HeaderSocialLinks
        menuListSocialClass={menuListSocialClass}
        setBurgerMenuIsOpen={setBurgerMenuIsOpen}
      />
    </div>
  );
}

export default HeaderLinks;
