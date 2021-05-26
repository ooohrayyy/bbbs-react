import { React, useState } from 'react';

import DelRecord from '../Popups/DelRecord/DelRecord';

function UserRegistredEvent({ title, startDayMonth, startMonth }) {
  const [isDelRecPopupOpen, setIsDelRecPopupOpen] = useState(false);

  function handleRegEventClick() {
    setIsDelRecPopupOpen(true);
  }

  function closeRegEventPopup() {
    setIsDelRecPopupOpen(false);
  }

  return (
    <>
      <li className="personal-area__reg-event" onClick={handleRegEventClick}>
        <div className="personal-area__reg-event-date">
          <span className="personal-area__reg-event-day">{startDayMonth}</span>
          <span className="personal-area__reg-event-month">{startMonth}</span>
        </div>
        <p className="personal-area__reg-event-description">{title}</p>
      </li>
      <DelRecord
        isOpen={isDelRecPopupOpen}
        title={title}
        handleClose={closeRegEventPopup}
        handleConfirm={closeRegEventPopup}
      />
    </>
  );
}

export default UserRegistredEvent;
