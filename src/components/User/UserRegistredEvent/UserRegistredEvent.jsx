import { React, useState } from 'react';

import Meetup from '../../Popups/Meetup/Meetup';

function UserRegistredEvent({ title, startDayMonth, startMonth, event }) {
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
      <Meetup
        isOpen={isDelRecPopupOpen}
        title={event.title}
        address={event.address}
        contact={event.contact}
        description={event.description}
        startAt={event.startAt}
        endAt={event.endAt}
        seats={event.seats}
        booked={event.booked}
        takenSeats={event.takenSeats}
        handleClose={closeRegEventPopup}
        onBookingEvent={closeRegEventPopup}
      />
    </>
  );
}

export default UserRegistredEvent;
