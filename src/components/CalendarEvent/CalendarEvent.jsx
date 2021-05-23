import React from 'react';
import PropTypes from 'prop-types';
import { parsedDate } from '../../utils/calendarUtils';

function CalendarEvent({
  type,
  address,
  contact,
  title,
  startAt,
  endAt,
  booked,
  seats,
  takenSeats,
  description,
  handleMore,
  needDescription,
}) {
  const { month, dayWeek, time, dayMonth } = parsedDate(startAt);
  const endTime = parsedDate(endAt).time;
  const numberOfFreeSeats = seats - takenSeats;
  const hasFreeSeats = numberOfFreeSeats > 0;

  return (
    <>
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">{type}</p>
          <p className="calendar__weekday">{`${month} / ${dayWeek}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">{title}</h2>
          <p className="calendar__date">{dayMonth}</p>
        </div>
      </div>

      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">{`${time}-${endTime}`}</p>
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
              disabled={!hasFreeSeats}
            >
              Записаться
            </button>
          )}
          {!booked && (
            <p className="calendar__place-left">
              {hasFreeSeats
                ? `Осталось ${numberOfFreeSeats} мест`
                : 'Запись закрыта'}
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
      </div>
    </>
  );
}

CalendarEvent.propTypes = {
  event: PropTypes.shape({
    type: PropTypes.string,
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
