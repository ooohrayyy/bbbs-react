import React from 'react';

import HeaderRegularLinks from '../HeaderRegularLinks/HeaderRegularLinks';
import HeaderSocialLinks from '../HeaderSocialLinks/HeaderSocialLinks';

function HeaderLinks({ menuListsWrapClass, menuListSocialClass }) {
  return (
    <div className={menuListsWrapClass}>
      <HeaderRegularLinks />
      <HeaderSocialLinks menuListSocialClass={menuListSocialClass} />
    </div>
  );
}

export default HeaderLinks;
