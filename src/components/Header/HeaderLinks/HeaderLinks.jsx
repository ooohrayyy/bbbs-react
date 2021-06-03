import React from 'react';

import HeaderRegularLinks from '../HeaderRegularLinks/HeaderRegularLinks';
import HeaderSocialLinks from '../HeaderSocialLinks/HeaderSocialLinks';

function HeaderLinks({
  menuListsWrapClass,
  menuListSocialClass,
  isAuthorized,
  onCalendarLinkClick,
}) {
  return (
    <div className={menuListsWrapClass}>
      <HeaderRegularLinks
        isAuthorized={isAuthorized}
        onCalendarLinkClick={onCalendarLinkClick}
      />
      <HeaderSocialLinks menuListSocialClass={menuListSocialClass} />
    </div>
  );
}

export default HeaderLinks;
