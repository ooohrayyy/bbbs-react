import React from 'react';
import PropTypes from 'prop-types';
import CalendarEvent from '../CalendarEvent/CalendarEvent';

function CalendarCard({
  event,
  openMore,
  openConfirmationMadal,
  onBookingEvent,
  closeMoreModal,
}) {
  function handleMore() {
    openMore(event);
  }

  return (
    <CalendarEvent
      event={event}
      type="Волонтеры"
      handleMore={handleMore}
      needDescription={false}
      openConfirmationMadal={openConfirmationMadal}
      onBookingEvent={onBookingEvent}
      closeMoreModal={closeMoreModal}
    />
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
    remainSeats: PropTypes.number,
    id: PropTypes.number,
    description: PropTypes.string,
    startMonthGenitive: PropTypes.string,
  }),
  openConfirmationMadal: PropTypes.func,
  onBookingEvent: PropTypes.func,
  openMore: PropTypes.func,
  closeMoreModal: PropTypes.func,
};

export default CalendarCard;
