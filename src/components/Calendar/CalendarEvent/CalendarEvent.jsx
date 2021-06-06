import React from 'react';
import PropTypes from 'prop-types';

function CalendarEvent({
  event,
  type,
  handleMore,
  needDescription,
  openConfirmationMadal,
  onBookingEvent,
  closeMoreMadal,
}) {
  const {
    remainSeats,
    startDayMonth,
    startDayWeek,
    startMonth,
    startTime,
    endTime,
    booked,
    id,
    address,
    contact,
    title,
    description,
  } = event;

  const hasFreeSeats = remainSeats > 0;
  function handleConfirmationMadalOpen() {
    openConfirmationMadal(event);
  }
  function handleBookingEvent() {
    onBookingEvent(id);
    closeMoreMadal();
  }

  return (
    <article className={`calendar ${booked ? 'calendar_selected' : ''}`}>
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">{type}</p>
          <p className="calendar__weekday">{`${startMonth} / ${startDayWeek}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">{title}</h2>
          <p className="calendar__date">{startDayMonth}</p>
        </div>
      </div>

      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">{`${startTime}-${endTime}`}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">{address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{contact}</p>
          </li>
        </ul>
        {needDescription && (
          <div className="calendar__description">
            <p className="paragraph calendar__desc-paragraph">{description}</p>
          </div>
        )}
      </div>
      <div className="calendar__submit">
        {booked ? (
          <button
            className="button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up"
            type="button"
          >
            Отменить запись
          </button>
        ) : (
          <button
            onClick={
              needDescription ? handleBookingEvent : handleConfirmationMadalOpen
            }
            className="button button_theme_light"
            type="button"
            disabled={!hasFreeSeats}
          >
            Записаться
          </button>
        )}
        {!booked && (
          <p className="calendar__place-left">
            {hasFreeSeats ? `Осталось ${remainSeats} мест` : 'Запись закрыта'}
          </p>
        )}
        {!needDescription && (
          <button
            onClick={handleMore}
            className="button calendar__button-dots button_theme_light"
            type="button"
          >
            &#8226;&#8226;&#8226;
          </button>
        )}
      </div>
    </article>
  );
}

CalendarEvent.propTypes = {
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
  type: PropTypes.string,
  handleMore: PropTypes.func,
  needDescription: PropTypes.bool,
  openConfirmationMadal: PropTypes.func,
  onBookingEvent: PropTypes.func,
  closeMoreMadal: PropTypes.func,
};

export default CalendarEvent;
