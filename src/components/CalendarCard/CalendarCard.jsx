import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Meetup from '../Popups/Meetup/Meetup';
import CalendarEvent from '../CalendarEvent/CalendarEvent';

function CalendarCard({ event }) {
  const {
    address,
    contact,
    title,
    startAt,
    endAt,
    booked,
    seats,
    takenSeats,
    description,
  } = event;
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  function handleMore() {
    setIsMoreOpen(true);
  }

  function handleClose() {
    setIsMoreOpen(false);
  }

  return (
    <>
      <article className={`calendar ${booked ? 'calendar_selected' : ''}`}>
        <CalendarEvent
          type="Волонтеры"
          address={address}
          contact={contact}
          title={title}
          description={description}
          startAt={startAt}
          endAt={endAt}
          seats={seats}
          takenSeats={takenSeats}
          handleMore={handleMore}
          needDescription={false}
        />
      </article>

      <Meetup
        isOpen={isMoreOpen}
        handleClose={handleClose}
        type="Волонтеры"
        address={address}
        contact={contact}
        title={title}
        description={description}
        startAt={startAt}
        endAt={endAt}
        seats={seats}
        takenSeats={takenSeats}
        needDescription
      />
    </>
  );
}

CalendarCard.propTypes = {
  event: PropTypes.shape({
    address: PropTypes.string,
    contact: PropTypes.string,
    title: PropTypes.string,
    booked: PropTypes.bool,
    startMonth: PropTypes.string,
    startDayWeek: PropTypes.string,
    startTime: PropTypes.string,
    startDayMonth: PropTypes.string,
    endTime: PropTypes.string,
    freeSeats: PropTypes.number,
  }),
};

export default CalendarCard;
