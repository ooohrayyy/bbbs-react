import React from 'react';
import PropTypes from 'prop-types';
import CalendarEvent from '../CalendarEvent/CalendarEvent';

function CalendarCard({ event, openMore }) {
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

  function handleMore() {
    openMore(event);
  }

  return (
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
