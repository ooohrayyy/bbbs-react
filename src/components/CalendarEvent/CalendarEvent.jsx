import React from 'react';
import PropTypes from 'prop-types';

function CalendarEvent({ event }) {
  const {
    address,
    contact,
    title,
    booked,
    startMonth,
    startDayWeek,
    startTime,
    startDayMonth,
    endTime,
    freeSeats,
  } = event;

  return (
    <article className={`calendar ${booked ? 'calendar_selected' : ''}`}>
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры</p>
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
              className="button button_theme_light"
              type="button"
              disabled={freeSeats === 0}
            >
              Записаться
            </button>
          )}
          {!booked && (
            <p className="calendar__place-left">
              {freeSeats > 0 ? `Осталось ${freeSeats} мест` : 'Запись закрыта'}
            </p>
          )}
          <button
            className="button calendar__button-dots button_theme_light"
            type="button"
          >
            &#8226;&#8226;&#8226;
          </button>
        </div>
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
    freeSeats: PropTypes.number,
  }),
};

export default CalendarEvent;
